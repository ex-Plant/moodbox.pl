'use client';

import { Tip } from '@/components/common/Tip';
import SliderSlide from '@/components/home/SliderSlide';
import useCart from '@/lib/hooks/useCart';
import { useIsMaxMd, useIsSm } from '@/lib/hooks/useMediaQuery';
import { ProductItemT } from '@/lib/temp/mock-data';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Keyboard, Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';

type PropsT = {
	slides: ProductItemT[];
	title: string;
	fullScreen: boolean;
	initSlide?: number;
};

export default function ProductsSlider({ slides, title, fullScreen, initSlide = 0 }: PropsT) {
	const { cartItems } = useCart();
	const selectedWithinCatLen = slides.filter((slide) => cartItems.includes(slide.id)).length ?? 0;

	const [swiperIsReady, setSwiperIsReady] = useState(false);
	const [swiper, setSwiper] = useState<SwiperType | null>(null);

	const isMaxMd = useIsMaxMd();
	const isSm = useIsSm();

	let numberOfSlides = 6;
	let spaces = 48;

	if (isSm) {
		numberOfSlides = 1;
		spaces = 0;
	} else if (isMaxMd) {
		numberOfSlides = 3;
		spaces = 24;
	}

	const swiperConfig = {
		modules: [Pagination, Mousewheel, Keyboard],
		spaceBetween: fullScreen ? 0 : spaces,
		slidesPerView: fullScreen ? 1 : numberOfSlides,
		draggable: true,
		centeredSlides: false,
		initialSlide: initSlide,

		loop: slides.length > 2,
		speed: 250,
		mousewheel: { forceToAxis: true, releaseOnEdges: true, sensitivity: 3.5 },
		keyboard: { enabled: true, onlyInViewport: true },

		onSwiper: (swiperInstance: SwiperType) => {
			setSwiper(swiperInstance);
			setSwiperIsReady(true);
		},
	};

	const ref = useRef<HTMLDivElement>(null);

	const [fullScreenDialogOpen, setFullScreenDialogOpen] = useState(false);
	const [activeSlide, setActiveSlide] = useState(0);
	function toggle(index: number) {
		// do not open dialog on mobile
		if (isSm) return;
		setFullScreenDialogOpen((curr) => !curr);
		swiper?.slideTo(index);
		setActiveSlide(index);
	}

	return (
		<>
			<div
				ref={ref}
				className={cn(`xPaddings mx-auto max-w-[1440px]`, swiperIsReady ? 'opacity-100 duration-500' : 'opacity-0')}
			>
				<div className={`text-mood-dark-gray x:pl-4 flex items-center pb-6 text-[24px]`}>
					<h3 className={`font-bold`}>{title}</h3>
					<Tip delay={400} side={`right`} content={`Możesz wybrać po dwie próbki z każdej kategorii`}>
						{selectedWithinCatLen > 1 && <span className={`mx-2`}>{selectedWithinCatLen} / 2</span>}
					</Tip>
				</div>
				<div className={cn(`flex items-center`, fullScreen ? 'mx-auto max-w-[min(60vw,770px)]' + ' w-full' : '')}>
					<button className={`translate-y-[-25px] pr-8`} onClick={() => swiper?.slidePrev()}>
						<ChevronLeft
							className={cn(
								`stroke-mood-brown w-auto stroke-[1.5px]`,
								fullScreen ? 'h-12' + ' xl:h-20' : 'h-10 xl:h-14'
							)}
						/>
					</button>
					<Swiper {...swiperConfig} className={`mx-9 flex h-full`}>
						{slides.map((slide, i) => (
							<SwiperSlide onClick={() => toggle(i)} key={i}>
								<SliderSlide slide={slide} selectable={selectedWithinCatLen < 2} fullScreen={fullScreen} />
							</SwiperSlide>
						))}
					</Swiper>

					<button className={`translate-y-[-25px] pl-8`} onClick={() => swiper?.slideNext()}>
						<ChevronRight
							className={cn(
								`stroke-mood-brown w-auto stroke-[1.5px]`,
								fullScreen ? 'h-12' + ' xl:h-20' : 'h-10 xl:h-14'
							)}
						/>
					</button>
				</div>
			</div>
			<Dialog open={fullScreenDialogOpen} onOpenChange={setFullScreenDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle></DialogTitle>
						<DialogDescription></DialogDescription>
					</DialogHeader>
					<ProductsSlider key={title} slides={slides} title={title} fullScreen initSlide={activeSlide} />
				</DialogContent>
			</Dialog>
		</>
	);
}
