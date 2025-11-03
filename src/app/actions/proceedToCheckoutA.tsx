'use server';
import { createCart, getProductByHandle } from '@/lib/shopify/api';
import { redirect } from 'next/navigation';

import { z } from 'zod';

const formSchema = z.object({
	company_name: z.string().default(''),
	nip: z.coerce.string().default(''),
	email: z.string().email().or(z.string().length(0)).default(''),
	website: z.coerce.string().default(''),
	projects_per_year: z.coerce.string().default(''),
	city: z.string().default(''),
	project_type: z.string().default(''),
	completion_date: z.string().default(''),
	project_stage: z.string().default(''),
	project_area: z.string().default(''),
	project_budget: z.string().default(''),
});

const ATTRIBUTE_KEY_PL: Record<keyof FormT, string> = {
	company_name: 'Nazwa firmy / pracowni',
	nip: 'NIP',
	email: 'E-mail',
	website: 'Strona WWW',
	projects_per_year: 'Liczba projektów rocznie',
	city: 'Miejscowość',
	project_type: 'Typ projektu',
	completion_date: 'Termin realizacji (MM/RR)',
	project_stage: 'Etap projektu',
	project_area: 'Metraż',
	project_budget: 'Budżet',
};

export type FormT = z.infer<typeof formSchema>;

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
