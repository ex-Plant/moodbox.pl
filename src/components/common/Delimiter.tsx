import LogoSquares from '@/components/common/LogoSquares';
import { cn } from '@/lib/utils';

type PropsT = {
	className?: string;
	title?: string;
};

export default function Delimiter({ title, className }: PropsT) {
	return (
		<div className={`xPaddings my-6`}>
			<div
				className={cn(
					`border-mood-brown relative flex min-h-20 items-center border border-r-0 border-l-0 py-4`,
					className
				)}
			>
				<div className={`absolute inset-0 flex items-center justify-center`}>
					<LogoSquares />
				</div>

				<p className={`text-mood-dark-gray text-[2.25rem]`}>{title}</p>
			</div>
		</div>
	);
}
