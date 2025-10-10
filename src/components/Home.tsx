import Cart from '@/components/home/cart/Cart';
import ProductsSlider from '@/components/home/ProductsSlider';
import { mockData } from '@/lib/mock-data';
import { Suspense } from 'react';

export default function Home() {
	return (
		<>
			<section id={'products'} className={`space-y-4 pb-20`}>
				<Suspense fallback={null}>
					{mockData.map((el) => (
						<ProductsSlider key={el.title} slides={el.items} title={el.title} />
					))}
				</Suspense>
			</section>
			<Suspense fallback={null}>
				<Cart />
			</Suspense>
		</>
	);
}
