'use client';
import SelectedProduct from '@/components/home/cart/SelectedProduct';
import useCart from '@/lib/hooks/useCart';
import { mockData } from '@/lib/mock-data';

export default function SelectedProducts() {
	const { cartItems } = useCart();

	const allProducts = mockData.flatMap((el) => el.items);
	const selected = allProducts.filter((el) => cartItems.includes(el.id));

	return (
		<>
			<div className={`h-full rounded bg-white p-4 pb-12 shadow-sm`}>
				<h4 className={`text-mood-dark-gray text-[18px]`}>Wybrane próbki:</h4>
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
