import LogoSquares from '@/components/common/LogoSquares';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type PropsT = {};

export default function Footer({}: PropsT) {
	return (
		<>
			<footer className={`xPaddings relative mx-auto w-full max-w-[1440px] pb-12`}>
				<div className={`absolute top-12 right-0 left-0 flex items-center justify-center`}>
					<LogoSquares />
				</div>
				<div className={`border-mood-brown text-mood-dark-brown grid grid-cols-12 border-t pt-4 pl-4`}>
					<FooterCat title={'Obsługa klienta'}>
						<div className={`grid gap-1`}>
							<Link className={`font-normal`} href={'/faq'}>
								FAQ
							</Link>{' '}
							<Link className={`font-normal`} href={'/faq'}>
								Regulamin
							</Link>{' '}
							<Link className={`font-normal`} href={'/faq'}>
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
