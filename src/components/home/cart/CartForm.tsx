import { proceedToCheckout } from '@/app/actions/proceedToCheckoutA';
import LogoSvg from '@/components/common/Logo';
import CartFormFooter from '@/components/home/cart/CartFormFooter';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tip } from '@/components/ui/Tip';
import { initState } from '@/lib/CartSchema';
import useCart from '@/lib/hooks/useCart';
import { toastMessage, ToastType } from '@/lib/toasts/toasts';
import { CircleQuestionMark } from 'lucide-react';
import { useActionState, useEffect, useState } from 'react';

const txt = `Dlaczego prosimy o wypełnienie formularza?
Informacje o projekcie pozwalają nam przekazać producentom wartościowe dane i usprawnić proces dystrybucji próbek. Dzięki temu materiały są dobierane bardziej precyzyjnie, a cały proces zamawiania staje się szybszy i wygodniejszy.
Twoje dane są chronione i wykorzystywane wyłącznie w celu obsługi zamówienia oraz poprawy jakości usługi.`;

export default function CartForm() {
	const { cartItems } = useCart();
	const checkoutWithCartItems = proceedToCheckout.bind(null, cartItems);
	const [state, formAction, pending] = useActionState(checkoutWithCartItems, initState);

	const [consent2, setConsent2] = useState(false);
	const [consent1, setConsent1] = useState(false);

	const [formSelects, setFormSelects] = useState({
		project_type: '',
		completion_date: '',
		project_stage: '',
		project_area: '',
		project_budget: '',
	});

	function handleSelectChange(name: string, value: string) {
		setFormSelects((curr) => {
			return {
				...curr,
				[name]: value,
			};
		});
	}

	useEffect(() => {
		if (pending || !state.error) return;
		setConsent2(true);
		setConsent1(true);
		toastMessage('Wystąpił błąd podczas przejścia do płatności. Spróbuj ponownie.', ToastType.Error);
	}, [pending, state.error]);

	return (
		<form action={formAction} className={`relative grid gap-4`}>
			<div>
				<header className={`flex items-center`}>
					<h4 className={`text-[18px] font-bold`}>Dane firmowe</h4>
					<Tip content={txt} side={`right`} className={`p-2`}>
						<CircleQuestionMark className={`fill-mood-dark-brown w-5 border-none stroke-white`} />
					</Tip>
				</header>

				<div className={`grid gap-4 md:grid-cols-2 xl:mr-4`}>
					<Input
						defaultValue={state.data.company_name}
						placeholder={'Nazwa firmy / pracowni'}
						name={'company_name'}
					/>
					<Input defaultValue={state.data.nip} name={'nip'} placeholder={'NIP'} />
					<Input defaultValue={state.data.email} name={'email'} placeholder={'E-mail'} type={'email'} />
					<Input defaultValue={state.data.website} name={'website'} placeholder={'Link do strony www'} />
					<Input
						defaultValue={state.data.projects_per_year}
						name={'projects_per_year'}
						placeholder={'Liczba projektów rocznie'}
					/>
				</div>
			</div>
			<div>
				<h4 className={`text-[18px] font-bold`}>Informacje dodatkowe o Twoim projekcie </h4>
				<div className={`grid gap-4 pt-2 md:grid-cols-2 xl:mr-4`}>
					<Input defaultValue={state.data.city} name={'city'} placeholder={'Miejscowość'} />
					<Select
						defaultValue={state.data.project_type}
						value={formSelects.project_type}
						name={'project_type'}
						onValueChange={(val) => handleSelectChange('project_type', val)}
					>
						<SelectTrigger>
							<SelectValue placeholder='Typ' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='Mieszkanie'>Mieszkanie</SelectItem>
							<SelectItem value='Dom'>Dom</SelectItem>
							<SelectItem value='Hotel'>Hotel</SelectItem>
							<SelectItem value='Restauracja'>Restauracja</SelectItem>
							<SelectItem value='Biuro'>Biuro</SelectItem>
						</SelectContent>
					</Select>
					<input type='hidden' name='project_type' value={formSelects.project_type} />
					<Select
						defaultValue={state.data.project_area}
						value={formSelects.project_area}
						name={'project_area'}
						onValueChange={(val) => handleSelectChange('project_area', val)}
					>
						<SelectTrigger>
							<SelectValue placeholder='Metraż' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='0-100 '>0-100 m2</SelectItem>
							<SelectItem value='100-500'>100-500 m2</SelectItem>
							<SelectItem value='500-2000 '>500-2000 m2</SelectItem>
							<SelectItem value='>2000 '>2000 m2 i więcej</SelectItem>
						</SelectContent>
					</Select>
					<input type='hidden' name='project_area' value={formSelects.project_area} />

					<Input placeholder={'Termin realizacji MM / RR'} />
					<Select
						defaultValue={state.data.project_budget}
						value={formSelects.project_budget}
						name={'project_budget'}
						onValueChange={(val) => handleSelectChange('project_budget', val)}
					>
						<SelectTrigger>
							<SelectValue placeholder='Budżet' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='<100'>do 100 tys. zł</SelectItem>
							<SelectItem value='100-300'>100–300 tys. zł</SelectItem>
							<SelectItem value='300-700'>300–700 tys. zł</SelectItem>{' '}
							<SelectItem value='700-1500'>700 tys.–1,5 mln zł</SelectItem>
							<SelectItem value='1500'>powyżej 1,5 mln zł</SelectItem>
							<SelectItem value='nie wiem'>jeszcze nie wiem</SelectItem>
						</SelectContent>
					</Select>
					<input type='hidden' name='project_budget' value={formSelects.project_budget} />

					<Select
						defaultValue={state.data.project_stage}
						value={formSelects.project_stage}
						name={'project_stage'}
						onValueChange={(val) => handleSelectChange('project_stage', val)}
					>
						<SelectTrigger className='w'>
							<SelectValue placeholder='Etap projektu' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='concept'>koncepcja</SelectItem>
							<SelectItem value='project'>projekt wykonawczy</SelectItem>
							<SelectItem value='realization'>realizacja</SelectItem>
						</SelectContent>
					</Select>
					<input type='hidden' name='project_stage' value={formSelects.project_stage} />
				</div>
			</div>
			<CartFormFooter
				consent1={consent1}
				consent2={consent2}
				setConsent1={setConsent1}
				setConsent2={setConsent2}
			/>

			{pending && (
				<div className={`pointer-events-none absolute inset-0 flex items-center justify-center`}>
					<LogoSvg asButon={false} className={`animate-bounce duration-500`} />
				</div>
			)}
		</form>
	);
}
