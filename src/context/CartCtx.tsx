'use client';
import { ProductItemT } from '@/lib/mock-data';
import React, { createContext, useContext, useState } from 'react';

type CtxT = {
	selected: ProductItemT[];
	add: (product: ProductItemT) => void;
	deleteProduct: (id: number | string) => void;
	removeAll: () => void;
};

export const CartCtx = createContext<CtxT>({
	selected: [],
	add: () => {},
	deleteProduct: () => {},
	removeAll: () => {},
});

type PropsT = {
	children: React.ReactNode;
};

export default function CartCtxProvider({ children }: PropsT) {
	const [selected, setSelected] = useState<ProductItemT[]>([]);

	function add(product: ProductItemT) {
		setSelected((curr) => [...curr, product]);
	}

	function deleteProduct(id: number | string) {
		setSelected((curr) => {
			const updated = curr.filter((el) => el.id !== id);
			return updated;
		});
	}

	function removeAll() {
		setSelected([]);
	}

	return (
		<CartCtx.Provider
			value={{
				selected,
				add,
				removeAll,
				deleteProduct,
			}}
		>
			{children}
		</CartCtx.Provider>
	);
}

export const useCartCtx = () => {
	const ctx = useContext(CartCtx);

	if (!ctx) {
		throw new Error(`❌ no ctx!!`);
	}

	return ctx;
};
