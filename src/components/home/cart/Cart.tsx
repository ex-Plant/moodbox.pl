'use client';

import Delimiter from '@/components/common/Delimiter';
import CartForm from '@/components/home/cart/CartForm';
import SelectedProducts from '@/components/home/cart/SelectedProducts';

export default function Cart() {
	return (
		<section className={`pb-20`}>
			<Delimiter title={'Formularz'} />
			<div className={`xPaddings mx-auto grid max-w-[1440px] grid-cols-12`}>
				<aside className={`col-span-3 pl-4`}>
					<SelectedProducts />
				</aside>
				<div className={`col-span-9 col-start-5`}>
					<CartForm />
				</div>
			</div>
		</section>
	);
}
