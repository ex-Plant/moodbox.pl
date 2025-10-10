import { router } from 'next/client';

const curr = searchParams.get('cart');
const parsed = curr ? JSON.parse(curr) : [];

const checked = parsed.includes(slide.id);

function setQueryParam(key: string, value: string | null) {
	const params = new URLSearchParams(searchParams.toString());
	if (value === null) params.delete(key);
	else params.set(key, value);
	router.replace(`${pathname}?${params.toString()}`, { scroll: false });
}
