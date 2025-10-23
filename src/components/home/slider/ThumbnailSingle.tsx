import { ProductVariantT } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

type VarT = {
	variant: ProductVariantT;
	fullScreen: boolean;
	selected: ProductVariantT;
};
export default function ThumbnailSingle({ variant, fullScreen, selected }: VarT) {
	const { image } = variant;

	return (
		<div
			className={cn(
				`relative rounded`,
				fullScreen ? 'h-full w-full' : 'h-full w-full',
				selected.id === variant.id && 'border border-black'
			)}
		>
			{image?.url && (
				<Image
					data-pin-nopin='true'
					data-pin-no-hover='true'
					fill={true}
					className={cn(`rounded`)}
					src={image.url}
					alt={''}
					sizes={'5vw'}
				/>
			)}
		</div>
	);
}
