import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Tip } from '@/components/ui/Tip';
import useCart from '@/lib/hooks/useCart';
import { useState } from 'react';

export default function CartFormFooter() {
	const { cartItems } = useCart();

	const [consent2, setConsent2] = useState(false);
	const [consent1, setConsent1] = useState(false);
	const [invoice, setInvoice] = useState(false);

	function toggleConsent1() {
		setConsent1((curr) => !curr);
	}
	function toggleConsent2() {
		setConsent2((curr) => !curr);
	}
	function toggleInvoice() {
		setInvoice((curr) => !curr);
	}

	const missingConsents = !consent1 || !consent2;
	const emptyCart = cartItems.length < 1;
	let text = 'Zaznacz wszystkie wymagane zgody';
	if (emptyCart) text = 'Koszyk jest pusty';

	return (
		<>
			<div className={`grid gap-2 pt-4`}>
				<div className={`flex items-center gap-4`}>
					<Checkbox className={``} checked={consent1} onCheckedChange={toggleConsent1} />
					<p className={`leading-none`}>
						Zapoznałem am się z Regulaminem i Polityką Prywatności oraz akceptuje ich postanowienia
					</p>
				</div>
				<div className={`flex items-center gap-4`}>
					<Checkbox checked={consent2} onCheckedChange={toggleConsent2} />
					<p className={``}>
						Wyrażam zgodę na kontakt w sprawie realizacji zamówienia oraz otrzymywania informacji związanych
						z obsług zamówienia
					</p>
				</div>{' '}
				<div className={`flex items-center gap-4`}>
					<Checkbox checked={invoice} onCheckedChange={toggleInvoice} />
					<p className={``}>Chcę otrzymać fakturę</p>
					{invoice && <p className={``}>* Wypełnij polę NIP!</p>}
				</div>
			</div>
			<div className={`flex flex-col gap-4 pt-4 xl:mr-4 xl:items-end`}>
				<div className={`grid gap-2`}>
					<p className={`ml-auto text-[2rem] text-nowrap xl:text-[2.5rem]`}>39 PLN</p>
					<Tip disabled={!missingConsents && !emptyCart} content={text} side={`bottom`} className={`ml-auto`}>
						<Button
							disabled={missingConsents || emptyCart}
							type={'submit'}
							variant={'mood'}
							size={`lg`}
							className={`w-fit cursor-pointer disabled:opacity-50 xl:w-full`}
						>
							Przejdź do płatności
						</Button>
					</Tip>
				</div>
			</div>
		</>
	);
}
