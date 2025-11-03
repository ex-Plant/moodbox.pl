import Delimiter from '@/components/common/Delimiter';
import DelimiterFullW from '@/components/common/DelimiterFullW';
import Hero from '@/components/home/Hero';
import Icons from '@/components/home/iconsSection/Icons';
import Collections from '@/components/home/products/Collections';
import { getProductsByCollection } from '@/lib/shopify/api';

export default async function HomePage() {
	const productsByCollection = await getProductsByCollection();

	return (
		<>
			<Hero />
			<Delimiter className={`flex justify-center`} />
			<DelimiterFullW title={`Od wyboru do dostawy - prościej się nie da`} />
			<Icons />
			<Delimiter title={'Katalog próbek'} />
			<Collections productsByCollection={productsByCollection} />
		</>
	);
}
