import { Tip } from '@/components/common/Tip';
import useCart from '@/lib/hooks/useCart';
import { ProductItemT } from '@/lib/mock-data';
import { X } from 'lucide-react';
import Image from 'next/image';

type PropsT = {
	selected: ProductItemT;
};

export default function SelectedProduct({ selected }: PropsT) {
	const { name, material, brand } = selected;

	const { deleteCartItem } = useCart();

	return (
		<article className={`flex gap-2`}>
			<div className={`relative aspect-square size-[60px]`}>
				<Image className={`rounded`} layout={'fill'} src={`/card2.png`} alt={''} />
			</div>

			<div className={``}>
				<div className={`line-clamp-1 pt-1 text-[10px] leading-tight font-bold text-[#9d9c9c]`}>{material}</div>
				<div className={`line-clamp-1 text-[14px] leading-tight font-bold`}>{brand}</div>
				<div className={`text-mood-dark-gray line-clamp-1 text-[12px] leading-tight`}>{name}</div>
			</div>

			<Tip content={`Usuń z koszyka`} className={`item-start ml-auto flex pt-1`}>
				<X onClick={() => deleteCartItem(selected.id)} className={`size-4`} />
			</Tip>
		</article>
	);
}
