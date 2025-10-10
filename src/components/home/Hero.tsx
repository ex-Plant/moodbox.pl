import Nav from '@/components/nav/Nav';
import { Button } from '@/components/ui/button';
import { tr } from '@/utils/translations/pl';
import Link from 'next/link';

type PropsT = {};

export default function Hero({}: PropsT) {
	return (
		<>
			<div className={`relative`}>
				<video muted={true} autoPlay={true} className={`w-screen object-cover`} src='/moodvid.mp4' />
				<div className={`bg-mood-dark-brown absolute inset-0 opacity-10`}></div>

				<div className={`xPaddings absolute inset-0 mx-auto grid max-w-[1440px] grid-cols-12 pt-[160px]`}>
					<div className={`col-span-11 flex flex-col items-end text-white`}>
						<div className={`text-[60px] leading-tight text-[#EEEBE3]`}>
							<div className={``}>{'Twoje materiały w '}</div>
							<div className={`text-[60px] text-[#EEEBE3]`}>
								<span className={`pr-3 font-bold`}>jednym</span>
								<span>boxie</span>
							</div>
							<div className={`pt-4 text-[24px] text-[#f6f4f0]`}>{tr.heroSubtitle}</div>
						</div>

						<div className={`pt-28`}>
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
