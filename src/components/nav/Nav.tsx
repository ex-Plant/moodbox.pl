'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { UrlObject } from 'node:url';

export default function Nav() {
	return (
		<nav className={`xPaddings pointer-events-none fixed top-0 right-0 left-0 z-10 mx-auto max-w-[1440px]`}>
			<div
				className={`border-background flex min-h-16 grid-cols-12 items-center justify-between border-b xl:grid xl:min-h-20`}
			>
				<Link className={`pointer-events-auto col-span-3`} href={'/'}>
					<div className={`text-[2rem] text-white xl:text-[48px]`}>moodbox</div>
				</Link>
				<NavItem
					className={`col-start-11 mr-4 ml-auto xl:mr-0 xl:ml-0`}
					title='FAQ'
					href={{ pathname: '/faq', hash: 'faq' }}
				/>
				<NavItem title='Kontakt' href={{ pathname: '/contact', hash: 'contact' }} />
			</div>
		</nav>
	);
}

type PropsT = {
	title: string;
	href: UrlObject;
	className?: string;
};

function NavItem({ title, href, className }: PropsT) {
	return (
		<>
			<Link className={cn(`pointer-events-auto col-span-1 text-right text-white`, className)} href={href}>
				<span className={`border-b border-transparent delay-100 duration-500 hover:border-white`}>{title}</span>
			</Link>
		</>
	);
}
