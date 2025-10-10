import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useCart() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const curr = searchParams.get('cart');
	const cartItems = curr ? JSON.parse(curr) : [];

	function setQueryParam(key: string, value: string | null) {
		const params = new URLSearchParams(searchParams.toString());
		if (value === null) params.delete(key);
		else params.set(key, value);
		router.replace(`${pathname}?${params.toString()}` as Route, { scroll: false });
	}

	function addCartItem(id: string) {
		const updated = [...cartItems, id];
		setQueryParam('cart', JSON.stringify(updated));
	}

	function deleteCartItem(id: string) {
		const updated = cartItems.filter((el: string) => el != id);
		setQueryParam('cart', JSON.stringify(updated));
	}

	return { addCartItem, deleteCartItem, cartItems };
}
