import { Checkbox } from '@/components/ui/checkbox';

export default function FormConsents() {
	return (
		<div className={`pt-4 grid gap-4`}>
			<div className={`flex  items-center  gap-4 `}>
				<Checkbox className={``} />
				<p className={`leading-none`}>Zapoznałem am się z Regulaminem i Polityką Prywatności oraz akceptuje ich postanowienia</p>
			</div>
			<div className={`flex items-center  gap-4`}>
				<Checkbox />
				<p className={``}>
					Wyrażam zgodę na kontakt w sprawie realizacji zamówienia oraz otrzymywania informacji związanych z obsług
					zamówienia
				</p>
			</div>
		</div>
	);
}
