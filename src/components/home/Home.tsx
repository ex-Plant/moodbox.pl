import Cart from '@/components/home/cart/Cart';
import ProductsSlider from '@/components/home/slider/ProductsSlider';
import { ProductT } from '@/lib/shopify';
import { Suspense } from 'react';
type PropsT = {
	productsByCollection: { collection: string; handle: string; products: ProductT[] }[];
};

export default function Home({ productsByCollection }: PropsT) {
	const allProducts = productsByCollection.flatMap((collection) => collection.products);

	return (
		<>
			<section id={'products'} className={`space-y-4 pb-20`}>
				<Suspense fallback={null}>
					{productsByCollection.map((collection) => (
						<ProductsSlider
							key={collection.collection}
							slides={collection.products}
							title={collection.collection}
							isFullScreen={false}
						/>
					))}
				</Suspense>
			</section>
			<Suspense fallback={null}>
				<Cart allProducts={allProducts} />
			</Suspense>
		</>
	);
}
