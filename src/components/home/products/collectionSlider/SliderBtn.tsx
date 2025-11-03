import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type PropsT = {
	disabled: boolean;
	onClick?: () => void;
	isFullScreen: boolean;
	direction: 'left' | 'right';
};

export default function SliderBtn({ disabled, onClick, isFullScreen, direction }: PropsT) {
	const iconClass = cn(`stroke-mood-brown w-auto stroke-[1.5px]`, isFullScreen ? 'h-12 xl:h-20' : 'h-10 xl:h-14');

	return (
		<button
			disabled={disabled}
			className={cn(`translate-y-[-25px] pr-8 disabled:opacity-20`, isFullScreen ? `hidden lg:block` : '')}
			onClick={onClick}
		>
			{direction === 'left' ? <ChevronLeft className={iconClass} /> : <ChevronRight className={iconClass} />}
		</button>
	);
}
