'use client';

import LogoSvg from '@/components/common/Logo';
import LogoText from '@/components/common/LogoText';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { UrlObject } from 'node:url';
import { useEffect, useState } from 'react';

export default function Nav() {
	const [isOnTop, setIsOnTop] = useState(false);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		function handleScroll() {
			console.log(window.scrollY);
			setIsOnTop(window.scrollY > 80);
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={`xPaddings pointer-events-none fixed top-0 right-0 left-0 z-10 mx-auto max-w-[1440px]`}>
			<div
				className={cn(
					`flex min-h-16 grid-cols-12 items-center justify-between border-b duration-500 xl:grid xl:min-h-20`,
					isOnTop ? 'border-background' : 'border-transparent'
				)}
			>
				<Link className={`pointer-events-auto col-span-3`} href={'/'}>
					{/*<Image*/}
					{/*	quality={100}*/}
					{/*	width={60}*/}
					{/*	height={60}*/}
					{/*	className={``}*/}
					{/*	alt={'logo'}*/}
					{/*	src={`/logo_piktogram.png`}*/}
					{/*/>*/}
					{/*<div className={`h-10`}>*/}
					{/*	<LogoText />*/}
					{/*</div>*/}
					<div className={`h-10`}>
						<LogoSvg />
					</div>
				</Link>
				<NavItem
					className={`col-start-11 mr-4 ml-auto xl:mr-0 xl:ml-0`}
					title='FAQ'
					href={{ pathname: '/faq', hash: 'faq' }}
					isOnTop={isOnTop}
				/>
				<NavItem title='Kontakt' href={{ pathname: '/contact', hash: 'contact' }} isOnTop={isOnTop} />
			</div>
		</nav>
	);
}

type PropsT = {
	title: string;
	href: UrlObject;
	className?: string;
	isOnTop: boolean;
};

function NavItem({ title, href, className, isOnTop }: PropsT) {
	return (
		<>
			<Link
				className={cn(
					`pointer-events-auto col-span-1 text-right text-white duration-500`,
					isOnTop ? 'opacity-100' : 'opacity-0',
					className
				)}
				href={href}
			>
				<span className={`border-b border-transparent delay-100 duration-500 hover:border-white`}>{title}</span>
			</Link>
		</>
	);
}
