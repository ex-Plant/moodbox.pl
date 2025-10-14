import { Tip } from '@/components/common/Tip';
import { Checkbox } from '@/components/ui/checkbox';
import useCart from '@/lib/hooks/useCart';
import { ProductT } from '@/lib/shopify';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type PropsT = { slide: ProductT; selectable: boolean; fullScreen: boolean };

export default function SliderSlide({ slide, selectable, fullScreen }: PropsT) {
	const { addCartItem, deleteCartItem, cartItems } = useCart();

	const checked = cartItems.includes(slide.id);
	const { title, productType, description } = slide;

	function toggle() {
		if (checked) {
			deleteCartItem(slide.id);
		} else {
			addCartItem(slide.id);
		}
	}
	const src = slide.images.edges?.[0]?.node.url ?? '';

	return (
		<article>
			<div className={cn(`relative aspect-square`)}>
				<Image layout={'fill'} className={`h-full w-full rounded`} src={src} alt={''} />
				{selectable || checked ? (
					<Checkbox
						onClick={(e) => e.stopPropagation()}
						className={cn(`absolute top-2 left-2 size-6`, fullScreen && 'top-4 left-4 size-8 xl:size-10')}
						checked={checked}
						onCheckedChange={toggle}
					/>
				) : (
					<Tip content={`Możesz wybrać po dwie próbki z każdej kategorii`}>
						<Checkbox
							className={cn(`absolute top-2 left-2 size-6`, fullScreen && 'top-4 left-4 size-8 xl:size-10')}
							checked={checked}
						/>
					</Tip>
				)}
			</div>

			<div>
				<div
					className={cn(
						`line-clamp-1 pt-1 text-[10px] leading-tight font-bold text-[#9d9c9c]`,
						fullScreen ? 'text-[20px]' : ''
					)}
				>
					{productType}
				</div>
				<div className={cn(`line-clamp-1 text-[14px] leading-tight font-bold`, fullScreen ? 'text-[28px]' : '')}>
					{description}
				</div>
				<div
					className={cn(`text-mood-dark-gray line-clamp-1 text-[12px] leading-tight`, fullScreen ? 'text-[24px]' : '')}
				>
					{title}
				</div>
			</div>
		</article>
	);
}
