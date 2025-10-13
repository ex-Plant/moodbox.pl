'use client';
import SelectedProduct from '@/components/home/cart/SelectedProduct';
import { Button } from '@/components/ui/button';
import useCart from '@/lib/hooks/useCart';
import { mockData } from '@/lib/temp/mock-data';

export default function SelectedProducts() {
	const { cartItems, removeAllItems } = useCart();
	// const { cartItems } = useCart();
	//
	if (cartItems.length < 1) return <></>;

	const allProducts = mockData.flatMap((el) => el.items);
	const selected = allProducts.filter((el) => cartItems.includes(el.id));

	return (
		<>
			<div className={`flex h-full flex-col rounded bg-white p-4 shadow-sm`}>
				<h4 className={`text-mood-dark-gray text-[18px]`}>Wybrane próbki:</h4>
				<ul className={`grid gap-4 pt-4`}>
					{cartItems.map((item: string) => {
						const fullItem = selected.find((el) => el.id === item);
						return (
							fullItem && (
								<li key={item}>
									<SelectedProduct selected={fullItem} />
								</li>
							)
						);
					})}
				</ul>
				<Button onClick={removeAllItems} variant={`mood`} className={`mt-auto self-end`}>
					Usuń wszystko
				</Button>
			</div>
		</>
	);
}
