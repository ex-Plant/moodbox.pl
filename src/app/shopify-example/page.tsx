import { getProductsByCollection } from '@/lib/shopify';

export default async function ShopifyExamplePage() {
	const productsByCollection = await getProductsByCollection();
	console.log(productsByCollection);

	return (
		<div className='xPaddings mx-auto max-w-[1440px] py-12'>
			<h1 className='mb-8 text-3xl font-bold'>Shopify Products by Collection</h1>

			{productsByCollection.length === 0 ? (
				<p className='text-gray-500'>
					No collections found. Make sure your Shopify store has collections with products.
				</p>
			) : (
				<div className='space-y-12'>
					{productsByCollection.map((collection) => (
						<section key={collection.handle}>
							<h2 className='mb-6 text-2xl font-bold'>{collection.collection}</h2>

							{collection.products.length === 0 ? (
								<p className='text-gray-500'>No products in this collection.</p>
							) : (
								<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
									{collection.products.map((product) => {
										const image = product.images.edges[0]?.node;
										const price = product.priceRange.minVariantPrice;
										const secondName = product.secondName?.value;
										const material = product.material?.value;

										return (
											<div
												key={product.id}
												className='overflow-hidden rounded-lg border shadow-sm transition hover:shadow-md'
											>
												{image && (
													<div className='relative aspect-square overflow-hidden bg-gray-100'>
														<img
															src={image.url}
															alt={image.altText || product.title}
															className='h-full w-full object-cover'
														/>
													</div>
												)}
												<div className='p-4'>
													<h3 className='mb-2 text-lg font-semibold'>{product.title}</h3>
													{secondName && <p className='mb-1 text-sm text-gray-700'>{secondName}</p>}
													{material && <p className='mb-2 text-sm text-gray-600'>Material: {material}</p>}
													{product.vendor && <p className='mb-2 text-sm text-gray-600'>{product.vendor}</p>}
													<p className='text-xl font-bold'>
														{parseFloat(price.amount).toFixed(2)} {price.currencyCode}
													</p>
													{!product.availableForSale && <p className='mt-2 text-sm text-red-600'>Out of stock</p>}
												</div>
											</div>
										);
									})}
								</div>
							)}
						</section>
					))}
				</div>
			)}
		</div>
	);
}
