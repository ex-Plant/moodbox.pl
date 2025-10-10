'use client';

import { Checkbox } from '@/components/ui/checkbox';
import useCart from '@/lib/hooks/useCart';
import { ProductItemT } from '@/lib/mock-data';
import Image from 'next/image';

export default function SliderSlide({ slide }: { slide: ProductItemT }) {
	const { addCartItem, deleteCartItem, cartItems } = useCart();

	const checked = cartItems.includes(slide.id);

	function toggle() {
		if (checked) {
			deleteCartItem(slide.id);
		} else {
			addCartItem(slide.id);
		}
	}

	const { name, material, brand } = slide;
	return (
		<article>
			<div className={`relative aspect-square h-auto w-full`}>
				<Image className={`rounded`} layout={'fill'} src={`/card2.png`} alt={''} />
				<Checkbox className={`absolute top-2 left-2`} checked={checked} onCheckedChange={toggle} />
			</div>

			<div>
				<div className={`line-clamp-1 pt-1 text-[10px] leading-tight font-bold text-[#9d9c9c]`}>{material}</div>
				<div className={`line-clamp-1 text-[14px] leading-tight font-bold`}>{brand}</div>
				<div className={`text-mood-dark-gray line-clamp-1 text-[12px] leading-tight`}>{name}</div>
			</div>
		</article>
	);
}
