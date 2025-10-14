import { ShopifyResponseT } from './types';

const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_URL;
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

type ShopifyFetchParamsT = {
	query: string;
	variables?: Record<string, unknown>;
	cache?: RequestCache;
	tags?: string[];
};

export async function shopifyFetch<T>({
	query,
	variables = {},
	cache = 'force-cache',
	tags = [],
}: ShopifyFetchParamsT): Promise<ShopifyResponseT<T>> {
	try {
		const response = await fetch(SHOPIFY_STORE_DOMAIN, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
			},
			body: JSON.stringify({ query, variables }),
			cache,
			...(tags.length > 0 && { next: { tags } }),
		});

		if (!response.ok) {
			throw new Error(`Shopify API error: ${response.status} ${response.statusText}`);
		}

		const json = await response.json();

		if (json.errors) {
			console.error('Shopify GraphQL errors:', json.errors);
			throw new Error(json.errors[0]?.message || 'Unknown Shopify API error');
		}

		return json;
	} catch (error) {
		console.error('Shopify fetch error:', error);
		throw error;
	}
}
