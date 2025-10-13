'use client';

import inProgress from '@/lib/helpers/inProgress';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { type } from 'node:os';
import { UrlObject } from 'node:url';
import { ComponentProps } from 'react';

export default function Nav() {
	return (
		<nav className={`xPaddings pointer-events-none fixed top-0 right-0 left-0 z-10 mx-auto max-w-[1440px]`}>
			<div className={`border-background grid h-20 grid-cols-12 items-center justify-between border-b`}>
				<Link className={`pointer-events-auto col-span-3`} href={'/'}>
					<div className={`text-[48px] text-white`}>moodbox</div>
				</Link>
				<NavItem className={`col-start-11`} title='FAQ' href={{ pathname: '/faq', hash: 'faq' }} />
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
