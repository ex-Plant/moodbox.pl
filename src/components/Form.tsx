import Delimiter from '@/components/common/Delimiter';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';

type PropsT = {};

export default function Form({}: PropsT) {
	const selected = [];

	return (
		<section className={`pb-20`}>
			<Delimiter className={``} title={'Formularz'} />
			<div className={`xPaddings mx-auto grid min-h-[200px] max-w-[1440px] grid-cols-[1fr_3fr]`}>
				<aside className={`ml-4 rounded bg-white`}>
					<h4>Wybrane próbki</h4>

					<ul>
						{selected.map((el) => {
							return <></>;
						})}
					</ul>
				</aside>
			</div>
		</section>
	);
}

function SelectedProduct() {
	return (
		<article>
			<div className={`relative aspect-square h-auto w-full`}>
				<Image className={`rounded`} layout={'fill'} src={`/card2.png`} alt={''} />
				<Checkbox className={`absolute top-2 left-2`} />
			</div>

			<div>
				<div className={`line-clamp-1 pt-1 text-[10px] leading-tight font-bold text-[#9d9c9c]`}>{material}</div>
				<div className={`line-clamp-1 text-[14px] leading-tight font-bold`}>{brand}</div>
				<div className={`text-mood-dark-gray line-clamp-1 text-[12px] leading-tight`}>{name}</div>
			</div>
		</article>
	);
}
