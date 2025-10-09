import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';

export default function SliderSlide({ slide }: { slide: any }) {
	const { name, material, brand } = slide;
	return (
		<article>
			<div className={`relative aspect-square h-auto w-full`}>
				<Image className={`rounded`} layout={'fill'} src={`/card2.png`} alt={''} />
				<Checkbox className={`absolute top-2 left-2`} />
			</div>

			<div>
				<div className={`line-clamp-1 pt-1 text-[10px] leading-tight font-bold text-[#9d9c9c]`}>{material}</div>
				<div className={`line-clamp-1 text-[14px] leading-tight font-bold`}>{brand}</div>
				<div className={`text-mood-dark-gray line-clamp-1 text-[12px] leading-tight`}>{name}</div>
			</div>
		</article>
	);
}
