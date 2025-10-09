import Delimiter from '@/components/common/Delimiter';
import Hero from '@/components/home/Hero';
import Icons from '@/components/home/Icons';
import Partners from '@/components/home/Partners';
import ProductsSlider from '@/components/home/ProductsSlider';
import { mockProducts } from '@/lib/mock-data';

export default function Home() {
	return (
		<div className=''>
			<Hero />
			<Delimiter className={`flex justify-center`} />
			<div className={`bg-mood-dark-brown flex py-6 text-white`}>
				<p className={`mx-auto text-[28px]`}>Od wyboru do dostawy - prościej się nie da</p>
			</div>
			<Icons />
			{/*<Delimiter className={`flex`} title={'Partnerzy'} />*/}

			{/*<Partners />*/}
			<Delimiter className={``} title={'Katalog próbek'} />
			<section className={`space-y-4 pb-20`}>
				{mockProducts.map((el) => (
					<ProductsSlider key={el.title} slides={el.items} title={el.title} />
				))}
			</section>

			<Delimiter className={``} title={'Formularz'} />
		</div>
	);
}
