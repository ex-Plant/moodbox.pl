import Delimiter from '@/components/common/Delimiter';
import Hero from '@/components/home/Hero';
import Home from '@/components/home/Home';
import Icons from '@/components/home/Icons';

export default function Page() {
	return (
		<div className=''>
			<Hero />
			<Delimiter className={`flex justify-center`} />
			<div className={`bg-mood-dark-brown flex py-6 text-white`}>
				<p className={`mx-auto text-[28px]`}>Od wyboru do dostawy - prościej się nie da</p>
			</div>
			{/*<Icons />*/}
			{/*<Delimiter className={`flex`} title={'Partnerzy'} />*/}
			{/*<Partners />*/}
			<Delimiter className={``} title={'Katalog próbek'} />
			{/*<Home />*/}
		</div>
	);
}
