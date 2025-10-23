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
		<div
			className={cn(
				`grid h-fit w-full`,
				fullScreen ? 'grid-cols-6 gap-2 pt-4' : `grid-cols-6 gap-2 pt-2 md:grid-cols-4`
			)}
		>
			{variants.map((el, i) => (
				<button className={cn(`aspect-square w-full cursor-pointer`)} key={i} onClick={() => selectVariant(el)}>
					<ThumbnailSingle variant={el.node} fullScreen={fullScreen} selected={selected} />
				</button>
			))}
		</div>
	);
}
