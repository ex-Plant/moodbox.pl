import { shopifyFetch } from './client';
import {
	ADD_TO_CART_MUTATION,
	CREATE_CART_MUTATION,
	GET_ALL_COLLECTIONS_QUERY,
	GET_ALL_PRODUCTS_QUERY,
	GET_COLLECTION_BY_HANDLE_QUERY,
	GET_PRODUCT_BY_HANDLE_QUERY,
	REMOVE_FROM_CART_MUTATION,
	UPDATE_CART_LINES_MUTATION,
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

export async function createCart(lineItems: { merchandiseId: string; quantity: number }[]): Promise<CartT> {
	const response = await shopifyFetch<{
		cartCreate: {
			cart: CartT;
		};
	}>({
		query: CREATE_CART_MUTATION,
		variables: { lineItems },
		cache: 'no-store',
	});

	return response.data.cartCreate.cart;
}

export async function addToCart(cartId: string, lines: { merchandiseId: string; quantity: number }[]): Promise<CartT> {
	const response = await shopifyFetch<{
		cartLinesAdd: {
			cart: CartT;
		};
	}>({
		query: ADD_TO_CART_MUTATION,
		variables: { cartId, lines },
		cache: 'no-store',
	});

	return response.data.cartLinesAdd.cart;
}

export async function updateCartLines(cartId: string, lines: { id: string; quantity: number }[]): Promise<CartT> {
	const response = await shopifyFetch<{
		cartLinesUpdate: {
			cart: CartT;
		};
	}>({
		query: UPDATE_CART_LINES_MUTATION,
		variables: { cartId, lines },
		cache: 'no-store',
	});

	return response.data.cartLinesUpdate.cart;
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<CartT> {
	const response = await shopifyFetch<{
		cartLinesRemove: {
			cart: CartT;
		};
	}>({
		query: REMOVE_FROM_CART_MUTATION,
		variables: { cartId, lineIds },
		cache: 'no-store',
	});

	return response.data.cartLinesRemove.cart;
}
