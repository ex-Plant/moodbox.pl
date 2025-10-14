import SliderImg from '@/components/home/slider/SliderImg';
import { ProductT } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';

type PropsT = { slide: ProductT; selectable: boolean; fullScreen: boolean };

export default function SliderSlide({ slide, selectable, fullScreen }: PropsT) {
	const { title, productType, description } = slide;

	return (
		<article>
			<SliderImg slide={slide} selectable={selectable} fullScreen={fullScreen} />
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
