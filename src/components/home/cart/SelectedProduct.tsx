import { Tip } from '@/components/common/Tip';
import useCart from '@/lib/hooks/useCart';
import { ProductT } from '@/lib/shopify';
import { ProductItemT } from '@/lib/temp/mock-data';
import { X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type PropsT = {
	selected: ProductT;
};

export default function SelectedProduct({ selected }: PropsT) {
	const { deleteCartItem } = useCart();

	const { title, productType, description } = selected;
	const src = selected.images.edges?.[0]?.node.url;

	return (
		<article className={`flex gap-2`}>
			<div className={`relative size-[60px] rounded outline`}>
				{src && <Image width={60} height={60} className={`h-full w-full rounded`} src={src} alt={''} />}
			</div>

			<div className={``}>
				<p className={`line-clamp-1 pt-1 text-[10px] leading-tight font-bold text-[#9d9c9c]`}>{productType}</p>
				<p className={`line-clamp-1 text-[14px] leading-tight font-bold`}>{description}</p>
				<h6 className={`text-mood-dark-gray line-clamp-1 text-[12px] leading-tight`}>{title}</h6>
			</div>

			<Tip content={`Usuń z koszyka`} className={`item-start ml-auto flex pt-1`}>
				<X onClick={() => deleteCartItem(selected.id)} className={`size-4`} />
			</Tip>
		</article>
	);
}
