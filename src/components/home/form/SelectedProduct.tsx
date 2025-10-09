import { ProductItemT } from '@/lib/mock-data';
import Image from 'next/image';
type PropsT = {
	selected: ProductItemT;
};

export default function SelectedProduct({ selected }: PropsT) {
	const { name, material, brand } = selected;
	return (
		<article className={`flex gap-2`}>
			<div className={`relative aspect-square size-[60px]`}>
				<Image className={`rounded`} layout={'fill'} src={`/card2.png`} alt={''} />
			</div>

			<div className={``}>
				<div className={`line-clamp-1 pt-1 text-[10px] leading-tight font-bold text-[#9d9c9c]`}>{material}</div>
				<div className={`line-clamp-1 text-[14px] leading-tight font-bold`}>{brand}</div>
				<div className={`text-mood-dark-gray line-clamp-1 text-[12px] leading-tight`}>{name}</div>
			</div>
		</article>
	);
}
