import { cn } from '@/lib/utils';

export default function LogoSquares({ className }: { className?: string }) {
	// const height = 'h-[max(2vw,60px)]';
	const height = 'h-5';

	return (
		<div className={`grid aspect-square w-fit`}>
			<div className={`grid gap-y-1`}>
				<div className={`grid grid-cols-2 gap-1`}>
					<Square className={cn(`aspect-square`, height)} />
					<aside className={`grid gap-y-1`}>
						<Square />
						<Square />
					</aside>
				</div>

				<div className={`grid grid-cols-[2fr_8fr] gap-1`}>
					<Square className={cn(`grow-0`, height)} />
					<Square className={`grow`} />
				</div>
			</div>
		</div>
	);
}

function Square({ className }: { className?: string }) {
	return <div className={cn(`bg-mood-dark-brown rounded`, className)}></div>;
}
