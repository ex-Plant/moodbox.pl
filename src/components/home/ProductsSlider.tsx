'use client';

import { Tip } from '@/components/common/Tip';
import SliderSlide from '@/components/home/SliderSlide';
import useCart from '@/lib/hooks/useCart';
import { useIsMaxMd, useIsSm } from '@/lib/hooks/useMediaQuery';
import { ProductT } from '@/lib/shopify';
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
	slides: ProductT[];
	title: string;
	isFullScreen: boolean;
	initSlide?: number;
};

export default function ProductsSlider({ slides, title, isFullScreen, initSlide = 0 }: PropsT) {
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
		numberOfSlides = 4;
		spaces = 12;
	}

	// const actualSlidesPerView = fullScreen ? 1 : Math.min(numberOfSlides, slides.length);
	const actualSlidesPerView = isFullScreen ? 1 : numberOfSlides;
	const canLoop = slides.length > actualSlidesPerView;

	const swiperConfig = {
		modules: [Pagination, Mousewheel, Keyboard],
		spaceBetween: isFullScreen ? 0 : spaces,
		slidesPerView: actualSlidesPerView,
		draggable: true,
		centeredSlides: false,
		initialSlide: initSlide,

		loop: canLoop,
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
		if (isFullScreen) return;
		setFullScreenDialogOpen((curr) => !curr);
		swiper?.slideTo(index);
		setActiveSlide(index);
	}

	if (slides.length === 0) return <></>;

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
				<div className={cn(`flex`, isFullScreen ? `mx-auto w-full max-w-[min(60vw,770px)] items-center` : '')}>
					<button className={`translate-y-[-25px] pr-8`} onClick={() => swiper?.slidePrev()}>
						<ChevronLeft
							className={cn(`stroke-mood-brown w-auto stroke-[1.5px]`, isFullScreen ? 'h-12 xl:h-20' : 'h-10 xl:h-14')}
						/>
					</button>
					<Swiper {...swiperConfig} className={`mx-9 w-full`}>
						{slides.map((slide, i) => (
							<SwiperSlide onClick={() => toggle(i)} key={i} className={``}>
								<SliderSlide slide={slide} selectable={selectedWithinCatLen < 2} fullScreen={isFullScreen} />
							</SwiperSlide>
						))}
					</Swiper>

					<button className={`translate-y-[-25px] pl-8`} onClick={() => swiper?.slideNext()}>
						<ChevronRight
							className={cn(`stroke-mood-brown w-auto stroke-[1.5px]`, isFullScreen ? 'h-12 xl:h-20' : 'h-10 xl:h-14')}
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
					<ProductsSlider key={title} slides={slides} title={title} isFullScreen initSlide={activeSlide} />
				</DialogContent>
			</Dialog>
		</>
	);
}
