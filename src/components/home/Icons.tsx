import IconItem from '@/components/home/IconItem';
import { tr } from '@/utils/translations/pl';
import { ClipboardList, Cuboid, SquareCheckBig, Truck } from 'lucide-react';

export default function Icons() {
	const iconClass = 'stroke-mood-brown h-32 w-auto';

	return (
		<div>
			<div className={`xPaddings mx-auto grid max-w-[1440px] grid-cols-4 gap-4 py-20`}>
				<IconItem text={tr.icons.chooseSamples} icon={<SquareCheckBig className={iconClass} />} />
				<IconItem text={tr.icons.fillForm} icon={<ClipboardList className={iconClass} />} />
				<IconItem text={tr.icons.payBox} icon={<Cuboid className={iconClass} />} />
				<IconItem text={tr.icons.receive} icon={<Truck className={iconClass} />} />
			</div>
		</div>
	);
}
