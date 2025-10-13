'use client';

import SliderSlide from '@/components/home/SliderSlide';
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
			<div className={`text-mood-dark-gray pb-6 pl-4 text-[24px] font-bold`}>{title}</div>{' '}
			<div className={`flex items-center`}>
				<button className={`translate-y-[-25px] pr-8`} onClick={() => swiper?.slidePrev()}>
					<ChevronLeft className={`stroke-mood-brown h-14 w-auto stroke-[1.5px]`} />
				</button>
				<Swiper {...swiperConfig} className={`mx-9 flex h-full`}>
					{slides.map((slide, i) => (
						<SwiperSlide key={i}>
							<SliderSlide slide={slide} />
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
