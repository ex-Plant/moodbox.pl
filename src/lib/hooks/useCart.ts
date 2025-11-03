import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartStoreT = {
	cartItems: string[];
	addCartItem: (id: string) => void;
	deleteCartItem: (id: string) => void;
	removeAllItems: () => void;
};

export const useCartStore = create<CartStoreT>()(
	persist(
		(set) => ({
			cartItems: [],
			addCartItem: (id: string) => set((state) => ({ cartItems: [...state.cartItems, id] })),
			deleteCartItem: (id: string) =>
				set((state) => ({
					cartItems: state.cartItems.filter((el) => el !== id),
				})),
			removeAllItems: () => set({ cartItems: [] }),
		}),
		{
			name: 'cart-storage', // localStorage key
		}
	)
);

export default function useCart() {
	const { addCartItem, deleteCartItem, removeAllItems, cartItems } = useCartStore();

	// const router = useRouter();
	// const pathname = usePathname();
	// const searchParams = useSearchParams();

	// const curr = searchParams.get('cart');
	// const cartItems = curr ? JSON.parse(curr) : [];
	//
	// function setQueryParam(key: string, value: string | null) {
	// 	const params = new URLSearchParams(searchParams.toString());
	// 	if (value === null) params.delete(key);
	// 	else params.set(key, value);
	// 	router.replace(`${pathname}?${params.toString()}` as Route, { scroll: false });
	// }
	//
	// function addCartItem(id: string) {
	// 	console.log('addCartItem');
	// 	const updated = [...cartItems, id];
	// 	setQueryParam('cart', JSON.stringify(updated));
	// }
	//
	// function deleteCartItem(id: string) {
	// 	console.log('deleteCartItem');
	// 	const updated = cartItems.filter((el: string) => el != id);
	// 	setQueryParam('cart', JSON.stringify(updated));
	// }
	//
	// function removeAllItems() {
	// 	setQueryParam('cart', JSON.stringify([]));
	// }

	return { addCartItem, deleteCartItem, removeAllItems, cartItems };
}
