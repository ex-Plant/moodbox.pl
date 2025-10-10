'use client';
import SelectedProduct from '@/components/home/cart/SelectedProduct';
import useCart from '@/lib/hooks/useCart';

import { mockProducts } from '@/lib/mock-data';

export default function SelectedProducts() {
	const { cartItems } = useCart();

	const selected = mockProducts.filter((el) => cartItems.includes(el));

	return (
		<>
			<div className={`h-full rounded bg-white p-4 pb-12 shadow-sm`}>
				<h4 className={`text-mood-gray- text-[18px]`}>Wybrane próbki:</h4>
				<ul className={`grid gap-4 pt-4`}>
					{selected.map((selected) => {
						return (
							<li key={selected.id}>
								<SelectedProduct selected={selected} />
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
