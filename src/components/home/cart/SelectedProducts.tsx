'use client';
import SelectedProduct from '@/components/home/cart/SelectedProduct';
import { Button } from '@/components/ui/button';
import useCart from '@/lib/hooks/useCart';
import { ProductT, ProductVariantT } from '@/lib/shopify/types';

type PropsT = {
	selected: { node: ProductVariantT }[];
};

export default function SelectedProducts({ selected }: PropsT) {
	const { removeAllItems, cartItems } = useCart();

	return (
		<div className={`rounded bg-white p-4 shadow-sm`}>
			<div className={`flex h-full flex-col`}>
				<h4 className={`text-mood-dark-gray text-[18px]`}>Wybrane próbki:</h4>
				<ul className={`grid gap-4 pt-4 pb-12`}>
					{selected.map((item) => (
						<SelectedProduct selected={item.node} key={item.node.id} />
					))}
				</ul>
				{cartItems.length > 0 && (
					<Button onClick={removeAllItems} variant={`mood`} className={`mt-auto self-end`}>
						Usuń wszystko
					</Button>
				)}
			</div>
		</div>
	);
}
