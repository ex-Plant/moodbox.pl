import LogoSquares from '@/components/common/LogoSquares';
import { cn } from '@/lib/utils';

type PropsT = {
	className?: string;
	title?: string;
};

export default function Delimiter({ title, className }: PropsT) {
	return (
		<div className={`xPaddings mx-auto my-4 max-w-[1440px] xl:my-6`}>
			<div
				className={cn(
					`border-mood-brown relative flex min-h-16 items-center border border-r-0 border-l-0 py-4 xl:min-h-20`,
					className
				)}
			>
				<div className={cn(`absolute inset-0 flex items-center justify-center md:block`, title && 'hidden md:flex')}>
					<LogoSquares />
				</div>

				<p className={`text-mood-dark-gray pl-4 text-[1.5rem] xl:text-[2.25rem]`}>{title}</p>
			</div>
		</div>
	);
}
