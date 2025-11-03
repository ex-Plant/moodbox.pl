import Delimiter from '@/components/common/Delimiter';
import Hero from '@/components/home/Hero';
import Icons from '@/components/home/iconsSection/Icons';
import { getProductsByCollection } from '@/lib/shopify/api';
import Collections from '@/components/home/products/Collections';

export default async function Page() {
	const productsByCollection = await getProductsByCollection();

	return (
		<div className=''>
			<Hero />
			<Delimiter className={`flex justify-center`} />
			<div className={`bg-mood-dark-brown flex py-6 text-white`}>
				<p className={`xPaddings mx-auto text-center text-[1rem] md:text-[1.5rem] xl:text-[1.625rem]`}>
					Od wyboru do dostawy - prościej się nie da
				</p>
			</div>
			<Icons />
			<Delimiter  title={'Katalog próbek'} />
			<Collections productsByCollection={productsByCollection} />
		</div>
	);
}
