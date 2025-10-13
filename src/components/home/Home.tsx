import Cart from '@/components/home/cart/Cart';
import ProductsSlider from '@/components/home/ProductsSlider';
import ProductsSliderFullScreen from '@/components/home/ProductsSliderFullScreen';
import { mockData } from '@/lib/temp/mock-data';
import { Suspense } from 'react';

export default function Home() {
	return (
		<>
			<section id={'products'} className={`space-y-4 pb-20`}>
				<Suspense fallback={null}>
					{mockData.map((category) => (
						<ProductsSlider key={category.title} slides={category.items} title={category.title} />
					))}
				</Suspense>
			</section>
			<Suspense fallback={null}>
				<Cart />
			</Suspense>
		</>
	);
}
