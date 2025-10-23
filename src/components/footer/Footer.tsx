'use client';

import LogoSvg from '@/components/common/Logo';
import LogoSquares from '@/components/common/LogoSquares';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { UrlObject } from 'node:url';

export default function Footer() {
	return (
		<footer className={`xPaddings relative mx-auto mt-auto w-full max-w-[1440px] pb-12`}>
			<div
				className={`pointer-events-none absolute top-12 right-0 left-0 hidden items-center justify-center xl:flex`}
			>
				<LogoSvg asButon={true} />
			</div>
			<div
				className={`text-mood-dark-brown border-mood-brown grid gap-y-4 border-t pt-4 xl:grid-cols-12 xl:gap-y-0`}
			>
				<FooterCat className={`xl:pl-4`} title={'Obsługa klienta'}>
					<div className={`grid gap-1`}>
						<FooterLink href={{ pathname: '/faq', hash: '' }} title={'FAQ'} className={''} />
						<FooterLink href={{ pathname: '/regulamin', hash: '' }} title={'Regulamin'} className={''} />
						<FooterLink
							href={{ pathname: '/privacy', hash: '' }}
							title={'Polityka prywatności'}
							className={''}
						/>
					</div>
				</FooterCat>
				<FooterCat title={'Kontakt'} className={``} />
				<FooterCat title={'Newsletter'} className={'xl:col-start-9'} />
			</div>
			<div className={`pointer-events-none flex items-center justify-center py-4 xl:hidden`}>
				<LogoSvg asButon={true} />
			</div>
		</footer>
	);
}

type T = {
	title: string;
	className?: string;
	children?: React.ReactNode;
};

function FooterCat({ title, className, children }: T) {
	return (
		<div className={cn(`space-y-2 font-bold uppercase xl:col-span-3`, className)}>
			<h3>{title}</h3>
			{children}
		</div>
	);
}

type PropsT = {
	title: string;
	href: UrlObject;
	className?: string;
};

function FooterLink({ title, href }: PropsT) {
	return (
		<>
			<Link className={`font-normal`} href={href}>
				<span className={`hover:border-mood-dark-brown border-b border-transparent delay-100 duration-500`}>
					{title}
				</span>
			</Link>
		</>
	);
}
