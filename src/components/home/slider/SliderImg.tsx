import { Tip } from '@/components/ui/Tip';
import { Checkbox } from '@/components/ui/checkbox';
import useCart from '@/lib/hooks/useCart';
import { ProductT } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

type PropsT = {
	fullScreen: boolean;
	slide: ProductT;
	selectable: boolean;
};

export default function SliderImg({ slide, fullScreen, selectable }: PropsT) {
	const { addCartItem, deleteCartItem, cartItems } = useCart();
	const checked = cartItems.includes(slide.id);
	const src = slide.images.edges?.[0]?.node.url;

	function toggle() {
		if (!selectable && !checked) return;
		if (checked) return deleteCartItem(slide.id);
		addCartItem(slide.id);
	}

	return (
		<div className={cn(`relative aspect-square rounded`)}>
			{src && (
				<Image
					fill={true}
					className={`h-full w-full rounded`}
					src={src}
					alt={''}
					sizes={
						fullScreen
							? '(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 770px'
							: '(max-width: 768px) 100vw, (max-width: 1024px) 25vw, 16vw'
					}
				/>
			)}
			<Tip disabled={selectable || checked} content={`Możesz wybrać po dwie próbki z każdej kategorii`}>
				<Checkbox
					onClick={(e) => e.stopPropagation()}
					className={cn(
						`absolute top-2 left-2 size-6`,
						fullScreen && `top-4 left-4 size-8 xl:size-10`,
						!selectable && !checked && 'cursor-not-allowed'
					)}
					checked={checked}
					onCheckedChange={toggle}
				/>
			</Tip>
		</div>
	);
}
