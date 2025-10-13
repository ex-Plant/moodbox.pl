'use client';

import { Tip } from '@/components/common/Tip';
import SliderSlide from '@/components/home/SliderSlide';
import useCart from '@/lib/hooks/useCart';
import { ProductItemT } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type PropsT = {
	slides: ProductItemT[];
	title: string;
};

export default function ProductsSlider({ slides, title }: PropsT) {
	const { cartItems } = useCart();
	const selectedWithinCatLen = slides.filter((slide) => cartItems.includes(slide.id)).length ?? 0;

	const [swiperIsReady, setSwiperIsReady] = useState(false);
	const [swiper, setSwiper] = useState<SwiperType | null>(null);

	const swiperConfig = {
		modules: [Pagination, Mousewheel],
		spaceBetween: 48,
		slidesPerView: 6,
		draggable: true,
		centeredSlides: false,
		// Swipe feel tuning

		loop: slides.length > 2,
		speed: 250, // faster animation
		touchRatio: 1.5, // stronger swipe
		threshold: 4, // triggers sooner
		longSwipesMs: 200, // quicker long-swipe window
		longSwipesRatio: 0.2, // less distance to trigger
		mousewheel: { forceToAxis: true, releaseOnEdges: true, sensitivity: 3.5 },

		onSwiper: (swiperInstance: SwiperType) => {
			setSwiper(swiperInstance);
			setSwiperIsReady(true);
		},
	};

	return (
		<div
			className={cn(`xPaddings mx-auto max-w-[1440px]`, swiperIsReady ? 'opacity-100' + ' duration-500' : 'opacity-0')}
		>
			<div className={`text-mood-dark-gray flex items-center pb-6 pl-4 text-[24px]`}>
				<h3 className={`font-bold`}>{title}</h3>
				<Tip delay={400} side={`right`} content={`Możesz wybrać po dwie próbki z każdej kategorii`}>
					{selectedWithinCatLen > 1 && <span className={`mx-2`}>{selectedWithinCatLen} / 2</span>}
				</Tip>
			</div>
			<div className={`flex items-center`}>
				<button className={`translate-y-[-25px] pr-8`} onClick={() => swiper?.slidePrev()}>
					<ChevronLeft className={`stroke-mood-brown h-14 w-auto stroke-[1.5px]`} />
				</button>
				<Swiper {...swiperConfig} className={`mx-9 flex h-full`}>
					{slides.map((slide, i) => (
						<SwiperSlide key={i}>
							<SliderSlide slide={slide} selectable={selectedWithinCatLen < 2} />
						</SwiperSlide>
					))}
				</Swiper>

				<button className={`translate-y-[-25px] pl-8`} onClick={() => swiper?.slideNext()}>
					<ChevronRight className={`stroke-mood-brown h-14 w-auto stroke-[1.5px]`} />
				</button>
			</div>
		</div>
	);
}
