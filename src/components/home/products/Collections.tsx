import Delimiter from '@/components/common/Delimiter';
import Cart from '@/components/home/cart/Cart';
import Collection from '@/components/home/products/collectionSlider/Collection';
import { ProductT } from '@/lib/shopify/types';
import { Suspense } from 'react';
type PropsT = {
	productsByCollection: { collection: string; handle: string; products: ProductT[] }[];
};

export default function Collections({ productsByCollection }: PropsT) {
	return (
		<section id={'collections'} className={`space-y-4 pb-20`}>
			<Delimiter title={'Katalog próbek'} />
			<Suspense fallback={null}>
				{productsByCollection.map((collection) => (
					<Collection
						key={collection.collection}
						slides={collection.products}
						title={collection.collection}
						isFullScreen={false}
					/>
				))}
			</Suspense>
		</section>
	);
}
