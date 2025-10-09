'use client';
import SelectedProduct from '@/components/home/form/SelectedProduct';
import { useCartCtx } from '@/context/CartCtx';

export default function SelectedProducts() {
	const { selected } = useCartCtx();

	return (
		<>
			<aside className={`ml-4 rounded bg-white p-4 pb-12 shadow-sm`}>
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
			</aside>
		</>
	);
}
