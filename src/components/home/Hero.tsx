import { Button } from '@/components/ui/button';
import { tr } from '@/lib/translations/pl';
import Link from 'next/link';

export default function Hero() {
	return (
		<>
			<div className={`relative`}>
				<video muted={true} autoPlay={true} className={`h-screen w-full object-cover xl:w-screen`} src='/moodvid.mp4' />
				<div className={`bg-mood-dark-brown absolute inset-0 opacity-10`}></div>

				<div
					className={`xPaddings absolute inset-0 mx-auto flex max-w-[1440px] grid-cols-12 flex-col pt-[160px] xl:grid`}
				>
					<div className={`col-span-11 flex flex-col items-end text-white`}>
						<div className={`text-[2.5rem] leading-tight text-[#EEEBE3] xl:text-[60px]`}>
							<div className={``}>{'Twoje materiały w '}</div>
							<div className={`text-[2.5rem] text-[#EEEBE3] xl:text-[60px]`}>
								<span className={`pr-3 font-bold`}>jednym</span>
								<span>boxie</span>
							</div>
							<div className={`pt-4 text-[1.5rem] text-[#f6f4f0] xl:text-[24px]`}>{tr.heroSubtitle}</div>
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
			</div>
		</>
	);
}
