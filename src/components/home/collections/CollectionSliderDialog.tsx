import CollectionSlider from '@/components/home/collections/CollectionSlider';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ProductT } from '@/lib/shopify/types';
import { Dispatch, SetStateAction } from 'react';

type SliderDialogT = {
	fullScreenDialogOpen: boolean;
	setFullScreenDialogOpen: Dispatch<SetStateAction<boolean>>;
	title: string;
	slides: ProductT[];
	initSlide: number;
};
export default function CollectionSliderDialog({
	setFullScreenDialogOpen,
	fullScreenDialogOpen,
	title,
	slides,
	initSlide,
}: SliderDialogT) {
	return (
		<Dialog open={fullScreenDialogOpen} onOpenChange={setFullScreenDialogOpen}>
			<DialogContent className={``}>
				<DialogHeader className={`hidden`}>
					<DialogTitle></DialogTitle>
					<DialogDescription></DialogDescription>
				</DialogHeader>
				<CollectionSlider slides={slides} title={title} isFullScreen initSlide={initSlide} />
			</DialogContent>
		</Dialog>
	);
}
