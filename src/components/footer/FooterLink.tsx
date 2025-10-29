import { UrlObject } from 'node:url';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type PropsT = {
	title: string;
	href: UrlObject;
	className?: string;
};

export default function FooterLink({ title, href, className }: PropsT) {
	return (
		<>
			<Link className={`font-normal`} href={href}>
				<span className={cn(`hover:border-mood-dark-brown border-b border-transparent delay-100 duration-500`, className)}>
					{title}
				</span>
			</Link>
		</>
	);
}
