import SliderImg from '@/components/home/slider/SliderImg';
import Thumbnails from '@/components/home/slider/Thumbnails';
import { ProductT, ProductVariantT } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

type PropsT = { slide: ProductT; selectable: boolean; fullScreen: boolean; toggleFullScreen: () => void };

export default function SliderSlide({ slide, selectable, fullScreen, toggleFullScreen }: PropsT) {
	const { title, productType, description, variants } = slide;
	const [selected, setSelected] = useState<ProductVariantT>(slide.variants.edges[0].node);

	return (
		<article className={``}>
			<div onClick={toggleFullScreen} className={cn(`mx-auto h-full`, !fullScreen && `cursor-zoom-in`)}>
				<SliderImg variant={selected} selectable={selectable} fullScreen={fullScreen} />
			</div>
			<Thumbnails
				fullScreen={fullScreen}
				selected={selected}
				setSelected={setSelected}
				variants={variants.edges}
			/>

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
