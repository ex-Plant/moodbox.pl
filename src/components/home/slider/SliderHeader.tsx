import { Tip } from '@/components/common/Tip';

type PropsT = {
	title: string;
	selectedWithinCatLen: number;
};

export default function SliderHeader({ title, selectedWithinCatLen }: PropsT) {
	return (
		<header className={`text-mood-dark-gray x:pl-4 flex items-center pb-6 text-[24px]`}>
			<h3 className={`font-bold`}>{title}</h3>
			<Tip delay={400} side={`right`} content={`Możesz wybrać po dwie próbki z każdej kategorii`}>
				{selectedWithinCatLen > 1 && <span className={`mx-2`}>{selectedWithinCatLen} / 2</span>}
			</Tip>
		</header>
	);
}
