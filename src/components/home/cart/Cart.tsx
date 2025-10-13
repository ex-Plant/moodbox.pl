'use client';

import Delimiter from '@/components/common/Delimiter';
import CartForm from '@/components/home/cart/CartForm';
import SelectedProducts from '@/components/home/cart/SelectedProducts';

export default function Cart() {
	return (
		<section className={`pb-12 xl:pb-20`}>
			<Delimiter title={'Formularz'} />
			<div className={`xPaddings mx-auto grid max-w-[1440px] xl:grid-cols-12`}>
				<aside className={`pl-4 xl:col-span-3`}>
					<SelectedProducts />
				</aside>
				<div className={`xl:col-span-9 xl:col-start-5`}>{<CartForm />}</div>
			</div>
		</section>
	);
}
