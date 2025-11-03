import { Tip } from '@/components/ui/Tip';
import { Checkbox } from '@/components/ui/checkbox';
import useCart from '@/lib/hooks/useCart';
import { ProductVariantT } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

type PropsT = {
	fullScreen: boolean;
	variant: ProductVariantT;
	selectable: boolean;
};

export default function VariantSelected({ variant, fullScreen, selectable }: PropsT) {
	const { addCartItem, deleteCartItem, cartItems } = useCart();
	const checked = cartItems.includes(variant.id);
	const src = variant.image?.url;

	console.log(variant.availableForSale, 'availableForSale');


	function toggle() {
		console.log(`toggle`);
		if (!selectable && !checked) return;
		if (checked) return deleteCartItem(variant.id);
		addCartItem(variant.id);
	}

	return (
		<div className={cn(`relative mx-auto aspect-square rounded`)}>
			{src && (
				<Image
					// data-pin-nopin='true'
					// data-pin-no-hover='true'
					fill={true}
					className={cn(`h-full w-full rounded`,
						variant.availableForSale ? `` : `opacity-50`
					)}
					src={src}
					alt={''}
					sizes={
						fullScreen
							? '(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 770px'
							: '(max-width: 768px) 100vw, (max-width: 1024px) 25vw, 16vw'
					}
				/>
			)}
			{
				variant.availableForSale ?

			<Tip disabled={selectable || checked} content={`Możesz wybrać po dwie próbki z każdej kategorii`}>
				<div
					role={`button`}
					onClick={(e) => {
						e.stopPropagation();
						toggle();
					}}
					className={cn(`absolute top-0 right-0 z-10 p-2`, fullScreen && `top-0 right-0 p-4`)}
				>
					<Checkbox
						className={cn(
							`h-full w-full`,
							fullScreen ? 'size-8 xl:size-10' : 'size-6',
							!selectable && !checked ? `cursor-not-allowed` : 'cursor-pointer'
						)}
						checked={checked}
					/>
				</div>
			</Tip>
				:
				<div className={cn(`absolute top-0 right-0  z-10`, fullScreen ? ` p-4 ` : ` p-2`)}>

				<OutOfStockTag fullScreen={fullScreen} />
				</div>
			}
		</div>
	);
}



type P = {
	fullScreen: boolean;
}

function OutOfStockTag({fullScreen}: P) {
	return <>
	<div className={cn(`text-xs `,
		fullScreen && `text-base`
		)}>
		 Niedostępny
	</div>

	</>
}
