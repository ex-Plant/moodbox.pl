import Delimiter from '@/components/common/Delimiter';
import DelimiterFullW from '@/components/common/DelimiterFullW';
import CartSection from '@/components/home/cart/CartSection';
import Collections from '@/components/home/collections/Collections';
import Hero from '@/components/home/Hero';
import Icons from '@/components/home/iconsSection/Icons';
import { getProductsByCollection } from '@/lib/shopify/api';
import { Suspense } from 'react';

export default async function HomePage() {
	const productsByCollection = await getProductsByCollection();
	const allProducts = productsByCollection.flatMap((collection) => collection.products);

	return (
		<>
			<Hero />
			<Delimiter className={`flex justify-center`} />
			<DelimiterFullW title={`Od wyboru do dostawy - prościej się nie da`} />
			<Icons />
			<Collections productsByCollection={productsByCollection} />
			<Suspense fallback={null}>
				<CartSection allProducts={allProducts} />
			</Suspense>
		</>
	);
}
