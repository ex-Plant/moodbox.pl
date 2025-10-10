'use client';

import inProgress from '@/lib/helpers/inProgress';
import Link from 'next/link';

export default function Nav() {
	return (
		<nav className={`xPaddings pointer-events-none fixed top-0 right-0 left-0 z-10 mx-auto max-w-[1440px]`}>
			<div className={`border-background grid h-20 grid-cols-12 items-center justify-between border-b`}>
				<div className={`col-span-3 text-[48px] text-white`}>moodbox</div>
				<Link
					onClick={inProgress}
					className={`pointer-events-auto col-start-11 border-b border-transparent text-right text-white delay-100 duration-500 hover:border-white`}
					href={'/#'}
				>
					FAQ
				</Link>
				<Link
					onClick={inProgress}
					className={`pointer-events-auto col-span-1 col-start-12 border-b border-transparent text-right text-white delay-100 duration-500 hover:border-white`}
					href={'/#'}
				>
					Kontakt
				</Link>
			</div>
		</nav>
	);
}
