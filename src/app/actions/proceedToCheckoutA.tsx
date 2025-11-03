'use server';
import { ATTRIBUTE_KEY_PL, formSchema, FormT } from '@/lib/CartSchema';
import { createCart, getProductByHandle } from '@/lib/shopify/api';
import { redirect } from 'next/navigation';

export async function proceedToCheckout(cartItems: string[], prevState: FormT, formData: FormData) {
	const raw = Object.fromEntries(formData.entries());
	const data = formSchema.parse(raw);
	const entries = Object.entries(data) as [keyof FormT, string][];

	// filter out empty fields
	const entriesFiltered = entries.filter((entry) => entry[1] !== '');

	// map field names to polish keys - this is visible at admin panel when order arrives
	const attributes = entriesFiltered.map(([k, v]) => ({
		key: ATTRIBUTE_KEY_PL[k] ?? String(k),
		value: v,
	}));

	// this is to get the fixed price of the box
	const flatFeeProduct = await getProductByHandle('box-stala-cena');
	if (!flatFeeProduct?.variants?.edges?.[0]?.node?.id) {
		throw new Error('Failed to get flat fee product');
	}

	// Create line items from variant IDs
	const lineItems = cartItems.map((id) => ({
		merchandiseId: id,
		quantity: 1,
	}));

	// todo add again after testing
	// Add the flat fee product variant
	// lineItems.push({
	// 	merchandiseId: flatFeeProduct.variants.edges[0].node.id,
	// 	quantity: 1,
	// });

	// add custom attributes
	const cart = await createCart(lineItems, attributes);

	if (cart?.checkoutUrl) {
		//@ts-expect-error url is fine
		redirect(cart.checkoutUrl);
	} else {
		return formSchema.parse(raw);
		throw new Error('Failed to create checkout');
	}
}
