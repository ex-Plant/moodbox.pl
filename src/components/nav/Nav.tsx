'use client';

import LogoSvg from '@/components/common/Logo';
import LogoText from '@/components/common/LogoText';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { UrlObject } from 'node:url';
import { useEffect, useState } from 'react';

export default function Nav() {
	const [isOnTop, setIsOnTop] = useState(true);

	const animDuration = 'duration-500';

	useEffect(() => {
		if (typeof window === 'undefined') return;

		function handleScroll() {
			setIsOnTop(window.scrollY < 80);
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={`xPaddings pointer-events-none fixed top-0 right-0 left-0 z-10 mx-auto max-w-[1440px]`}>
			<div
				className={cn(
					`relative flex h-16 grid-cols-12 items-center justify-between border-b xl:grid xl:h-20`,
					isOnTop ? 'border-background' : 'border-transparent',
					animDuration
				)}
			>
				<Link className={`pointer-events-auto col-span-3`} href={'/'}>
					<div
						className={cn(
							`absolute top-0 bottom-0 left-0 flex items-center`,
							isOnTop ? `opacity-100` : `opacity-0`,
							animDuration
						)}
					>
						<LogoText />
					</div>
					<div
						className={cn(
							`bg-background pointer-events-none fixed top-0 right-0 left-0 flex h-14 items-center justify-center`,
							isOnTop ? `opacity-0` : `opacity-100`,
							animDuration
						)}
					>
						<LogoSvg className={`h-10`} />
					</div>
				</Link>
				<NavItem
					className={`col-start-11 mr-4 ml-auto xl:mr-0 xl:ml-0`}
					title='FAQ'
					href={{ pathname: '/faq', hash: 'faq' }}
					isOnTop={isOnTop}
					animationDuration={animDuration}
				/>
				<NavItem
					title='Kontakt'
					href={{ pathname: '/contact', hash: 'contact' }}
					isOnTop={isOnTop}
					animationDuration={animDuration}
				/>
			</div>
		</nav>
	);
}

type PropsT = {
	title: string;
	href: UrlObject;
	className?: string;
	isOnTop: boolean;
	animationDuration: string;
};

function NavItem({ title, href, className, isOnTop, animationDuration }: PropsT) {
	return (
		<>
			<Link
				className={cn(
					`pointer-events-auto col-span-1 text-right text-white`,
					isOnTop ? 'opacity-100' : 'opacity-0',
					animationDuration,
					className
				)}
				href={href}
			>
				<span className={cn(`border-b border-transparent delay-100 hover:border-white`, animationDuration)}>
					{title}
				</span>
			</Link>
		</>
	);
}
