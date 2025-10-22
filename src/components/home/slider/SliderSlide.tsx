import SliderImg from '@/components/home/slider/SliderImg';
import { ProductT, ProductVariantT } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react';

type PropsT = { slide: ProductT; selectable: boolean; fullScreen: boolean; toggleFullScreen: () => void };

export default function SliderSlide({ slide, selectable, fullScreen, toggleFullScreen }: PropsT) {
	const { title, productType, description, variants } = slide;

	const [selected, setSelected] = useState<ProductVariantT>(slide.variants.edges[0].node);

	console.log(variants.edges, 'variant ✅');
	console.log(slide, 'slide');

	function selectVariant(variant: { node: ProductVariantT }) {
		setSelected(variant.node);
	}

	return (
		<article className={``}>
			<div onClick={toggleFullScreen} className={cn(`mx-auto h-full`, !fullScreen && `cursor-zoom-in`)}>
				<SliderImg variant={selected} selectable={selectable} fullScreen={fullScreen} />
			</div>
			<div
				className={cn(
					`grid`,
					fullScreen ? 'grid-cols-4 gap-2 pt-2 xl:grid-cols-6 xl:gap-4' : 'grid-cols-4 gap-1 pt-2'
				)}
			>
				{variants.edges.map((el, i) => (
					<button
						className={cn(`aspect-square min-h-6 w-full cursor-pointer`)}
						key={i}
						onClick={() => selectVariant(el)}
					>
						<Variant variant={el.node} fullScreen={fullScreen} selected={selected} />
					</button>
				))}
			</div>

			<div>
				<p
					className={cn(
						`line-clamp-1 pt-1 text-[10px] leading-tight font-bold text-[#9d9c9c]`,
						fullScreen ? 'text-[20px]' : ''
					)}
				>
					{productType}
				</p>
				<p className={cn(`line-clamp-1 text-[14px] leading-tight font-bold`, fullScreen ? 'text-[28px]' : '')}>
					{description}
				</p>
				<h4
					className={cn(
						`text-mood-dark-gray line-clamp-1 text-[12px] leading-tight`,
						fullScreen ? 'text-[24px]' : ''
					)}
				>
					{title}
				</h4>
			</div>
		</article>
	);
}

type VarT = {
	variant: ProductVariantT;
	fullScreen: boolean;
	selected: ProductVariantT;
};
function Variant({ variant, fullScreen, selected }: VarT) {
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
