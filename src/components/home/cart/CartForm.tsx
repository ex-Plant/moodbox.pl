import { checkoutA } from '@/app/actions/proceedToCheckoutA';
import LogoSvg from '@/components/common/Logo';
import {
	PROJECT_AREAS,
	PROJECT_BUDGETS,
	PROJECT_STAGES,
	PROJECT_TYPES,
	txt,
} from '@/components/home/cart/temporaryData';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tip } from '@/components/ui/Tip';
import { cartSchema, CartSchemaT } from '@/lib/CartSchema';
import useCart from '@/lib/hooks/useCart';
import { toastMessage, ToastType } from '@/lib/toasts/toasts';
import { useForm } from '@tanstack/react-form';
import { useStore } from '@tanstack/react-store';
import { CircleQuestionMark } from 'lucide-react';

export default function CartForm() {
	const { cartItems } = useCart();

	const form = useForm({
		defaultValues: {
			company_name: '',
			email: '',
			projects_per_year: '',
			nip: '',
			website: '',
			city: '',
			project_type: '',
			completion_date: '',
			project_stage: '',
			project_area: '',
			project_budget: '',
			consents: {
				consent1: false,
				consent2: false,
			},
		} satisfies CartSchemaT as CartSchemaT,
		validators: {
			onSubmit: cartSchema,
		},
		onSubmit: async (data) => {
			// console.log('🚀 formData: ', data.value);

			const res = await checkoutA(cartItems, data.value);
			console.log('res', res);

			if (res.error) {
				toastMessage(res.message, ToastType.Error);
				console.log('res', res);
				// prevent resetting form
			}

			return false;
		},
	});

	const emptyCart = cartItems.length < 1;

	const isSubmitting = useStore(form.store, (s) => s.isSubmitting);
	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					form.handleSubmit();
				}}
				className={`relative grid gap-4`}
			>
				<div>
					<header className={`flex items-center`}>
						<h4 className={`text-[18px] font-bold`}>Dane firmowe</h4>
						<Tip content={txt} side={`right`} className={`p-2`}>
							<CircleQuestionMark className={`fill-mood-dark-brown w-5 border-none stroke-white`} />
						</Tip>
					</header>
					<div className={`grid gap-4 md:grid-cols-2 xl:mr-4`}>
						<form.Field name='company_name'>
							{(field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<Input
											placeholder={'Nazwa firmy / pracowni'}
											id={field.name}
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											aria-invalid={isInvalid}
										/>
										{/*{isInvalid && <FieldError errors={field.state.meta.errors} />}*/}
									</Field>
								);
							}}
						</form.Field>
						<form.Field name='nip'>
							{(field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<Input
											placeholder={'NIP'}
											inputMode='numeric' // Shows numeric keyboard on mobile
											pattern='[0-9]*' // Ensures only numbers are entered
											id={field.name}
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											aria-invalid={isInvalid}
											onChange={(e) => {
												// Only allow numbers
												const value = e.target.value.replace(/\D/g, '');
												// Limit to 10 digits
												if (value.length <= 10) {
													field.handleChange(value);
												}
											}}
										/>
										{isInvalid && <FieldError errors={field.state.meta.errors} />}
									</Field>
								);
							}}
						</form.Field>
						<form.Field name='email'>
							{(field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<Input
											placeholder={'E-mail'}
											type={'email'}
											id={field.name}
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											aria-invalid={isInvalid}
										/>
									</Field>
								);
							}}
						</form.Field>

						<form.Field name='website'>
							{(field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<Input
											placeholder={'Link do strony www'}
											id={field.name}
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											aria-invalid={isInvalid}
										/>
										{/*{isInvalid && <FieldError errors={field.state.meta.errors} />}*/}
									</Field>
								);
							}}
						</form.Field>

						<form.Field name='projects_per_year'>
							{(field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<Input
											placeholder={'Liczba projektów rocznie'}
											id={field.name}
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											aria-invalid={isInvalid}
										/>
										{/*{isInvalid && <FieldError errors={field.state.meta.errors} />}*/}
									</Field>
								);
							}}
						</form.Field>
					</div>
				</div>
				<div>
					<h4 className={`text-[18px] font-bold`}>Informacje dodatkowe o Twoim projekcie </h4>
					<div className={`grid gap-4 pt-2 md:grid-cols-2 xl:mr-4`}>
						<form.Field name='city'>
							{(field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<Input
											placeholder={'Miejscowość'}
											id={field.name}
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											aria-invalid={isInvalid}
										/>
										{/*{isInvalid && <FieldError errors={field.state.meta.errors} />}*/}
									</Field>
								);
							}}
						</form.Field>

						<form.Field name='project_type'>
							{(field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<Select onValueChange={(e) => field.handleChange(e)} value={field.state.value}>
											<SelectTrigger aria-invalid={isInvalid} id={field.name}>
												<SelectValue placeholder={'Typ'} onBlur={field.handleBlur} />
											</SelectTrigger>
											<SelectContent>
												{PROJECT_TYPES.map((type) => (
													<SelectItem key={type.value} value={type.value}>
														{type.value}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										{/*{isInvalid && <FieldError errors={field.state.meta.errors} />}*/}
									</Field>
								);
							}}
						</form.Field>

						<form.Field name='project_area'>
							{(field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<Select onValueChange={(e) => field.handleChange(e)} value={field.state.value}>
											<SelectTrigger aria-invalid={isInvalid} id={field.name}>
												<SelectValue placeholder={'Metraż'} onBlur={field.handleBlur} />
											</SelectTrigger>
											<SelectContent>
												{PROJECT_AREAS.map((type) => (
													<SelectItem key={type.value} value={type.value}>
														{type.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										{/*{isInvalid && <FieldError errors={field.state.meta.errors} />}*/}
									</Field>
								);
							}}
						</form.Field>

						<form.Field name='completion_date'>
							{(field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<Input
											placeholder={'Termin realizacji MM / RR'}
											id={field.name}
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											aria-invalid={isInvalid}
										/>
										{/*{isInvalid && <FieldError errors={field.state.meta.errors} />}*/}
									</Field>
								);
							}}
						</form.Field>

						<form.Field name='project_budget'>
							{(field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<Select onValueChange={(e) => field.handleChange(e)} value={field.state.value}>
											<SelectTrigger aria-invalid={isInvalid} id={field.name}>
												<SelectValue placeholder={'Budżet'} onBlur={field.handleBlur} />
											</SelectTrigger>
											<SelectContent>
												{PROJECT_BUDGETS.map((type) => (
													<SelectItem key={type.value} value={type.value}>
														{type.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										{/*{isInvalid && <FieldError errors={field.state.meta.errors} />}*/}
									</Field>
								);
							}}
						</form.Field>

						<form.Field name='project_stage'>
							{(field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<Select onValueChange={(e) => field.handleChange(e)} value={field.state.value}>
											<SelectTrigger aria-invalid={isInvalid} id={field.name}>
												<SelectValue placeholder={'Etap projektu'} onBlur={field.handleBlur} />
											</SelectTrigger>
											<SelectContent>
												{PROJECT_STAGES.map((type) => (
													<SelectItem key={type.value} value={type.value}>
														{type.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										{/*{isInvalid && <FieldError errors={field.state.meta.errors} />}*/}
									</Field>
								);
							}}
						</form.Field>
					</div>
				</div>

				<div className={`grid gap-2 pt-4`}>
					<form.Field name='consents.consent1'>
						{(field) => {
							const isInvalid = field.state.meta.isTouched && !field.state.value;
							return (
								<Field data-invalid={isInvalid} orientation='horizontal'>
									<Checkbox
										id={field.name}
										name={field.name}
										checked={field.state.value}
										onBlur={field.handleBlur}
										onCheckedChange={(e) => field.handleChange(e === true)}
										aria-invalid={isInvalid}
									/>
									<FieldLabel className='font-normal' htmlFor={field.name}>
										Zapoznałem am się z Regulaminem i Polityką Prywatności oraz akceptuje ich
										postanowienia
									</FieldLabel>
								</Field>
							);
						}}
					</form.Field>{' '}
					<form.Field name='consents.consent2'>
						{(field) => {
							const isInvalid = field.state.meta.isTouched && !field.state.value;
							return (
								<Field data-invalid={isInvalid} orientation='horizontal'>
									<Checkbox
										id={field.name}
										name={field.name}
										checked={field.state.value}
										onBlur={field.handleBlur}
										onCheckedChange={(e) => field.handleChange(e === true)}
										aria-invalid={isInvalid}
									/>
									<FieldLabel className='leading-tight font-normal' htmlFor={field.name}>
										Wyrażam zgodę na kontakt w sprawie realizacji zamówienia oraz otrzymywania
										informacji związanych z obsług zamówienia
									</FieldLabel>
								</Field>
							);
						}}
					</form.Field>
				</div>
				<div className={`flex flex-col gap-4 pt-4 xl:mr-4 xl:items-end`}>
					<div className={`grid gap-2`}>
						<p className={`ml-auto text-[2rem] text-nowrap xl:text-[2.5rem]`}>39 PLN</p>
						<Tip disabled={!emptyCart} content={'Koszyk jest pusty'} side={`bottom`} className={`ml-auto`}>
							<Button
								disabled={emptyCart}
								type={'submit'}
								variant={'mood'}
								size={`lg`}
								className={`ml-auto w-fit cursor-pointer disabled:opacity-50 xl:w-full`}
							>
								Przejdź do płatności
							</Button>
						</Tip>
					</div>
				</div>
				{isSubmitting && (
					<div className={`pointer-events-none absolute inset-0 flex items-center justify-center`}>
						<LogoSvg asButon={false} className={`animate-bounce duration-500`} />
					</div>
				)}
			</form>
		</>
	);
}
