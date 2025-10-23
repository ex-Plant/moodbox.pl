'use client';

import Loader from '@/components/common/Loader';
import { Button } from '@/components/ui/button';
import { tr } from '@/lib/translations/pl';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
	const [isVideoReady, setIsVideoReady] = useState(false);

	return (
		<>
			<div className={`relative`}>
				{!isVideoReady && (
					<div className={`absolute inset-0`}>
						<Loader />
					</div>
				)}
				<>
					<video
						muted={true}
						autoPlay={true}
						className={`bg-background h-screen min-h-[600px] w-full object-cover xl:w-screen`}
						src='/moodbox _intro.mp4'
						loop={true}
						onLoad={() => setIsVideoReady(true)}
						onCanPlay={() => setIsVideoReady(true)}
					/>
					<div className={`bg-mood-dark-brown absolute inset-0 opacity-10`}></div>

					<div
						className={`xPaddings absolute inset-0 mx-auto flex max-w-[1440px] grid-cols-12 flex-col pt-[180px] xl:grid`}
					>
						<div className={`col-span-11 flex flex-col items-end text-white`}>
							<div className={`text-[2.5rem] leading-tight text-[#EEEBE3] xl:text-[60px]`}>
								<div className={``}>{'Twoje materiały w '}</div>
								<div className={`text-[2.5rem] text-[#EEEBE3] xl:text-[60px]`}>
									<span className={`pr-3 font-bold`}>jednym</span>
									<span>boxie</span>
								</div>
								<div className={`pt-4 text-[1.5rem] text-[#f6f4f0] xl:text-[24px]`}>
									{tr.heroSubtitle}
								</div>
							</div>

							<div className={`pt-12 xl:pt-28`}>
								<Button asChild={true} variant={`mood`} size={`sm`}>
									<Link href='#products' className={`cursor-pointer`}>
										{tr.heroButton}
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</>
			</div>
		</>
	);
}
