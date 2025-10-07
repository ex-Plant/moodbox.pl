import { cn } from '@/lib/utils';

type PropsT = {
	children: React.ReactNode;
	className?: string;
};

export default function Delimiter({ children, className }: PropsT) {
	return (
		<>
			<div className={cn(`m-4 border-[2px] border-r-0 border-l-0 border-[var(--mood-brown)] p-4`, className)}>
				{children}
			</div>
		</>
	);
}
