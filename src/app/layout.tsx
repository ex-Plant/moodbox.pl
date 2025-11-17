import Footer from '@/components/footer/Footer';
import Nav from '@/components/nav/Nav';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Geist, Inclusive_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import './globals.css';

const inclusive_Sans = Inclusive_Sans({
	variable: '--font-inclusive',
	subsets: ['latin'],
});

const geist = Geist({
	variable: '--font-geist',
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
		<html lang='pl' className={cn('scroll-smooth')}>
			<body
				className={cn(
					`flex min-h-screen flex-col antialiased`,
					`bg-background relative`,
					geist.variable,
					inclusive_Sans.variable,
					'font-inclusive'
					// `[&_*]:outline [&_*]:outline-[1px] [&_*]:outline-pink-400`
				)}
			>
				<Nav />
				<main>{children}</main>
				<Footer />
				<ToastContainer />
			</body>
		</html>
	);
}
