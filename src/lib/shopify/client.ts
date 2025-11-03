'use server';

import { ShopifyResponseT } from './types';

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STOREFRONT_API_URL;
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

type ShopifyFetchParamsT = {
	query: string;
	variables?: Record<string, unknown>;
	cache?: RequestCache;
	tags?: string[];
};

export async function shopifyFetch<T>({
	query,
	variables = {},
	// cache = 'no-cache',
	tags = [],
}: ShopifyFetchParamsT): Promise<ShopifyResponseT<T>> {
	if (!SHOPIFY_STOREFRONT_ACCESS_TOKEN) throw new Error(' ❗SHOPIFY_STOREFRONT_ACCESS_TOKEN');
	if (!SHOPIFY_STORE_DOMAIN) throw new Error('❗SHOPIFY_STORE_DOMAIN');

	try {
		const response = await fetch(SHOPIFY_STORE_DOMAIN, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
			},
			body: JSON.stringify({ query, variables }),
			// cache,
			next: {
				// todo ? change to greater value
				revalidate: 60, // 1 minute
				tags,
			},
		});

		if (!response.ok) {
			throw new Error(`Shopify API error: ${response.status} ${response.statusText}`);
		}

		const json = await response.json();

		if (json.errors) {
			console.error('Shopify GraphQL errors:', json.errors);
			console.error('Shopify GraphQL errors:', JSON.stringify(json.errors, null, 2));
			throw new Error(json.errors[0]?.message || 'Unknown Shopify API error');
		}

		return json;
	} catch (error) {
		console.error('Shopify fetch error:', error);
		throw error;
	}
}
