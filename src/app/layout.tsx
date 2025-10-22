import Footer from '@/components/footer/Footer';
import Nav from '@/components/nav/Nav';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inclusive_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const inclusive_Sans = Inclusive_Sans({
	variable: '--font-inclusive-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Moodbox beta ',
	description: 'Moodbox concept website testing ',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang='pl' className='scroll-smooth'>
			<body
				className={cn(
					` ${inclusive_Sans.variable} flex min-h-screen flex-col antialiased`,
					`bg-background relative scroll-smooth xl:flex`
					// `[&_*]:outline [&_*]:outline-[1px] [&_*]:outline-pink-400`
				)}
			>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
