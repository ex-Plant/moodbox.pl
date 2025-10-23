import ThumbnailSingle from '@/components/home/slider/ThumbnailSingle';
import { ProductVariantT } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';
import React, { Dispatch } from 'react';

type PropsT = {
	fullScreen: boolean;
	setSelected: Dispatch<React.SetStateAction<ProductVariantT>>;
	selected: ProductVariantT;
	variants: Array<{ node: ProductVariantT }>;
};

export default function Thumbnails({ fullScreen, variants, setSelected, selected }: PropsT) {
	function selectVariant(variant: { node: ProductVariantT }) {
		setSelected(variant.node);
	}
	return (
		<>
			<div
				className={cn(
					`grid`,
					fullScreen ? 'grid-cols-4 gap-2 pt-4 xl:grid-cols-6 xl:gap-4' : 'grid-cols-4 gap-1 pt-2'
				)}
			>
				{variants.map((el, i) => (
					<button
						className={cn(`aspect-square min-h-6 w-full cursor-pointer`)}
						key={i}
						onClick={() => selectVariant(el)}
					>
						<ThumbnailSingle variant={el.node} fullScreen={fullScreen} selected={selected} />
					</button>
				))}
			</div>
		</>
	);
}
