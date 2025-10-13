'use client';

import LogoSquares from '@/components/common/LogoSquares';
import inProgress from '@/lib/helpers/inProgress';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Footer() {
	return (
		<>
			<footer className={`xPaddings relative mx-auto w-full max-w-[1440px] pb-12`}>
				<div className={`absolute top-12 right-0 left-0 flex items-center justify-center`}>
					<LogoSquares />
				</div>
				<div className={`text-mood-dark-brown border-mood-brown grid grid-cols-12 border-t pt-4`}>
					<FooterCat className={`pl-4`} title={'Obsługa klienta'}>
						<div className={`grid gap-1`}>
							<Link onClick={inProgress} className={`font-normal`} href={'#'}>
								FAQ
							</Link>
							<Link onClick={inProgress} className={`font-normal`} href={'#'}>
								Regulamin
							</Link>
							<Link onClick={inProgress} className={`font-normal`} href={'#'}>
								Polityka prywatności
							</Link>
						</div>
					</FooterCat>
					<FooterCat title={'Kontakt'} />
					<FooterCat title={'Newsletter'} className={'col-start-9'} />
				</div>
			</footer>
		</>
	);
}

type T = {
	title: string;
	className?: string;
	children?: React.ReactNode;
};

function FooterCat({ title, className, children }: T) {
	return (
		<div className={cn(`col-span-3 space-y-2 font-bold uppercase`, className)}>
			<h3>{title}</h3>
			{children}
		</div>
	);
}
