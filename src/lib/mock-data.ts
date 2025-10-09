// Helper function to generate a unique ID
const generateId = (): string => Math.random().toString(36).substring(2, 9);

// Helper function to generate placeholder image URL
const getPlaceholderImage = (): string => 'https://via.placeholder.com/150';

export type ProductItemT = {
	id: string;
	material: string;
	brand: string;
	name: string;
	imageUrl: string;
};

export type ProductCategoryT = {
	title: string;
	items: ProductItemT[];
};

const generateItems = (
	count: number,
	material: string,
	brand: string,
	namePrefix: string,
): ProductItemT[] => {
	return Array.from({ length: count }, (_, i) => ({
		id: generateId(),
		material,
		brand,
		name: `${namePrefix} - ${i + 1}`,
		imageUrl: getPlaceholderImage(),
	}));
};

export const mockProducts: ProductCategoryT[] = [
	{
		title: 'PODŁOGI',
		items: generateItems(20, 'DREWNO', 'Fabri', 'Fabri'),
	},
	{
		title: 'TKANINY',
		items: generateItems(20, 'TKANINA OBICIOWA', 'Toptextil', 'Wzór'),
	},
	{
		title: 'PŁYTKI',
		items: [
			...generateItems(7, 'GRES', 'Opoczno', 'Terrazzo Stone'),
			...generateItems(7, 'GLAZURA', 'Cersanit', 'Marble Viola'),
			...generateItems(6, 'MOZAIKA', 'Dunin', 'Mint Breath'),
		],
	},
	{
		title: 'BLATY',
		items: [
			...generateItems(10, 'MARMUR', 'Meusstone', 'Nazwa kamienia'),
			...generateItems(10, 'KWARCYT NATURALNY', 'Krak-stone', 'Nazwa kamienia'),
		],
	},
	{
		title: 'MEBLE',
		items: [
			...generateItems(7, 'FORNIR', 'Atpol', 'Nazwa kamienia'),
			...generateItems(7, 'LAMINAT', 'Egger', 'Nazwa kamienia'),
			...generateItems(6, 'LAMINAT', 'Swiss-krono', 'Nazwa kamienia'),
		],
	},
];
