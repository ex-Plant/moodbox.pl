import { UrlObject } from 'node:url';
import Link from 'next/link';

type PropsT = {
	title: string;
	href: UrlObject;
	className?: string;
};

export default function FooterLink({ title, href }: PropsT) {
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
