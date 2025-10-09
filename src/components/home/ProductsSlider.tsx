'use client';

import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

type PropsT = {
	slides: any;
	title: string;
};

export default function ProductsSlider({ slides, title }: PropsT) {
	const [swiperIsReady, setSwiperIsReady] = useState(false);
	const [swiper, setSwiper] = useState<SwiperType | null>(null);
	console.log(slides);

	const swiperConfig = {
		modules: [Pagination],
		spaceBetween: 40,
		slidesPerView: 6,
		draggable: true,
		// centeredSlides: true,
		loop: slides.length > 2,
		onSwiper: (swiperInstance: SwiperType) => {
			setSwiper(swiperInstance);
			setSwiperIsReady(true);
		},
		// onSlideChange: (swiperInstance: SwiperType) => {
		// 	setActiveIndex(swiperInstance.realIndex);
		// },
	};
	// useEffect(() => {
	// 	console.log('selected chagned');
	// 	if (swiper) {
	// 		swiper.slideTo(0, 0);
	// 	}
	// 	setActiveIndex(0);
	// }, [selected, swiper]);

	if (slides.length < 0) return;
	return (
		<div className={`xPaddings`}>
			<div className={`text-mood-dark-gray pb-6 pl-4 text-[24px] font-bold`}>{title}</div>{' '}
			<div className={`flex items-center`}>
				<button className={`translate-y-[-25px]`} onClick={() => swiper?.slidePrev()}>
					<ChevronLeft className={`stroke-mood-brown`} />
				</button>
				{/*<div className={`w-full`}>*/}
				<Swiper {...swiperConfig} className={`mx-9 flex h-full`}>
					{slides.map((slide, i) => (
						<SwiperSlide key={i}>
							<Slide slide={slide} />
						</SwiperSlide>
					))}
				</Swiper>
				{/*</div>*/}

				<button className={``} onClick={() => swiper?.slideNext()}>
					<ChevronRight className={`stroke-mood-brown translate-y-[-25px]`} />
				</button>
			</div>
		</div>
	);
}

function Slide({ slide }: { slide: any }) {
	const { name, material, brand } = slide;
	return (
		<div>
			<div className={`relative aspect-square h-auto w-full rounded border border-black`}>
				<Image layout={'fill'} src={`/card2.png`} alt={''} />
			</div>

			<div>
				<div className={`line-clamp-1 pt-1 text-[10px] leading-tight font-bold text-[#9d9c9c]`}>{material}</div>
				<div className={`line-clamp-1 text-[14px] leading-tight font-bold`}>{brand}</div>
				<div className={`text-mood-dark-gray line-clamp-1 text-[12px] leading-tight`}>{name}</div>
			</div>
		</div>
	);
}
