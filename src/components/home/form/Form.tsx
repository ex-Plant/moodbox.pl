'use client';

import Delimiter from '@/components/common/Delimiter';
import SelectedProducts from '@/components/home/form/SelectedProducts';
import { useCartCtx } from '@/context/CartCtx';

export default function Form() {
	const { selected } = useCartCtx();

	if (!selected) return <></>;
	return (
		<section className={`pb-20`}>
			<Delimiter className={``} title={'Formularz'} />
			<div className={`xPaddings mx-auto grid max-w-[1440px] grid-cols-[1fr_3fr]`}>
				<SelectedProducts />
			</div>
		</section>
	);
}
