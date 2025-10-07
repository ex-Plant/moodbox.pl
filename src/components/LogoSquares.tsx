import { cn } from '@/lib/utils';

// type PropsT = {};

export default function LogoSquares({ className }: { className?: string }) {
	const height = 'h-[max(2vw,60px)]';

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
	return <div className={cn(`rounded bg-[var(--mood-dark-brown)]`, className)}></div>;
}
