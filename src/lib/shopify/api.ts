import { shopifyFetch } from './client';
import {
	CREATE_CART_MUTATION,
	GET_ALL_COLLECTIONS_QUERY,
	GET_ALL_PRODUCTS_QUERY,
	GET_COLLECTION_BY_HANDLE_QUERY,
	GET_PRODUCT_BY_HANDLE_QUERY,
} from './queries';
import { CartT, CollectionT, ProductT } from './types';

export async function getAllProducts(): Promise<ProductT[]> {
	const response = await shopifyFetch<{
		products: {
			edges: { node: ProductT }[];
		};
	}>({
		query: GET_ALL_PRODUCTS_QUERY,
		cache: 'no-store',
		tags: ['products'],
	});

	return response.data.products.edges.map((edge) => edge.node);
}

export async function getProductByHandle(handle: string): Promise<ProductT | null> {
	const response = await shopifyFetch<{ product: ProductT | null }>({
		query: GET_PRODUCT_BY_HANDLE_QUERY,
		variables: { handle },
		cache: 'force-cache',
		tags: [`product-${handle}`],
	});

	return response.data.product;
}

export async function getAllCollections(): Promise<CollectionT[]> {
	const response = await shopifyFetch<{
		collections: {
			edges: { node: CollectionT }[];
		};
	}>({
		query: GET_ALL_COLLECTIONS_QUERY,
		cache: 'no-cache',
		tags: ['collections'],
	});

	return response.data.collections.edges.map((edge) => edge.node);
}

export async function getProductsByCollection(): Promise<
	{ collection: string; handle: string; products: ProductT[] }[]
> {
	// async function wait(): Promise<void> {
	// 	console.log(`timeout start`);
	// 	return new Promise((res) => {
	// 		setTimeout(() => res(), 2000);
	// 	});
	// }
	// await wait();
	// console.log(`timeout end`);

	const collections = await getAllCollections();

	return collections.map((collection) => ({
		collection: collection.title,
		handle: collection.handle,
		products: collection.products.edges.map((edge) => edge.node),
	}));
}

export async function getCollectionByHandle(handle: string): Promise<CollectionT | null> {
	const response = await shopifyFetch<{ collection: CollectionT | null }>({
		query: GET_COLLECTION_BY_HANDLE_QUERY,
		variables: { handle },
		cache: 'force-cache',
		tags: [`collection-${handle}`],
	});

	return response.data.collection;
}

export async function createCart(
	lineItems: { merchandiseId: string; quantity: number }[],
	attributes?: { key: string; value: string }[]
): Promise<CartT> {
	const response = await shopifyFetch<{
		cartCreate: {
			cart: CartT;
		};
	}>({
		query: CREATE_CART_MUTATION,
		variables: { lineItems, attributes: attributes || [] },
		cache: 'no-store',
	});

	return response.data.cartCreate.cart;
}

export async function getFlatFeeProduct(): Promise<ProductT | null> {
	return getProductByHandle('box-stala-cena');
}

export async function proceedToCheckout(variantIds: string[]) {
	try {
		// Get the flat fee product
		const flatFeeProduct = await getFlatFeeProduct();
		if (!flatFeeProduct?.variants?.edges?.[0]?.node?.id) {
			throw new Error('Failed to get flat fee product');
		}

		// Create line items from variant IDs
		const lineItems = variantIds.map((id) => ({
			merchandiseId: id,
			quantity: 1, // or get quantity from your cart if you have it
		}));

		// Add the flat fee product variant
		// lineItems.push({
		// 	merchandiseId: flatFeeProduct.variants.edges[0].node.id,
		// 	quantity: 1,
		// });

		// Create cart with the items
		const cart = await createCart(lineItems, [
			{ key: 'test1', value: 'test1' },
			{ key: 'test2', value: 'test2' },
		]);

		// Redirect to Shopify checkout
		if (cart?.checkoutUrl) {
			window.location.href = cart.checkoutUrl;
		} else {
			throw new Error('Failed to create checkout');
		}
	} catch (error) {
		console.error('Checkout error:', error);
		// Handle error (show error message to user)
	}
}
