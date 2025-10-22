import FormConsents from '@/components/home/cart/FormConsents';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tip } from '@/components/ui/Tip';
import inProgress from '@/lib/helpers/inProgress';
import { CircleQuestionMark } from 'lucide-react';

const txt = `Dlaczego prosimy o wypełnienie formularza?
Informacje o projekcie pozwalają nam przekazać producentom wartościowe dane i usprawnić proces dystrybucji próbek. Dzięki temu materiały są dobierane bardziej precyzyjnie, a cały proces zamawiania staje się szybszy i wygodniejszy.
Twoje dane są chronione i wykorzystywane wyłącznie w celu obsługi zamówienia oraz poprawy jakości usługi.`;

export default function CartForm() {
	return (
		<section className={`grid gap-4`}>
			<div>
				<div className={`flex items-center`}>
					<h4 className={`text-[18px] font-bold`}>Dane firmowe</h4>
					<Tip content={txt} side={`right`} className={`p-2`}>
						<CircleQuestionMark className={`fill-mood-dark-brown w-5 border-none stroke-white`} />
					</Tip>
				</div>

				<div className={`grid gap-4 md:grid-cols-2 xl:mr-4`}>
					<Input placeholder={'Nazwa firmy / pracowni'} />
					<Input placeholder={'NIP'} />
					<Input placeholder={'E-mail'} />
					<Input placeholder={'Link do strony www'} />
					<Input placeholder={'Liczba projektów rocznie'} />
				</div>
			</div>
			<div>
				<h4 className={`text-[18px] font-bold`}>Informacje dodatkowe o Twoim projekcie </h4>
				<div className={`grid gap-4 pt-2 md:grid-cols-2 xl:mr-4`}>
					<Input placeholder={'Miejscowość'} />
					<Select>
						<SelectTrigger className='w'>
							<SelectValue placeholder='Typ' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='light'>Mieszkanie</SelectItem>
							<SelectItem value='dark'>Dom</SelectItem>
							<SelectItem value='system'>Hotel</SelectItem>
							<SelectItem value='system'>Restauracja</SelectItem>
							<SelectItem value='system'>Biuro</SelectItem>
						</SelectContent>
					</Select>
					<Select>
						<SelectTrigger className='w'>
							<SelectValue placeholder='Metraż' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='light'>0-100 m2</SelectItem>
							<SelectItem value='dark'>100-500 m2</SelectItem>
							<SelectItem value='system'>500-2000 m2</SelectItem>
							<SelectItem value='system'>2000 m2 i więcej</SelectItem>
						</SelectContent>
					</Select>
					<Input placeholder={'Termin realizacji MM / RR'} />
					<Select>
						<SelectTrigger className='w'>
							<SelectValue placeholder='Budżet' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='light'>do 100 tys. zł</SelectItem>
							<SelectItem value='dark'>100–300 tys. zł</SelectItem>
							<SelectItem value='system'>300–700 tys. zł</SelectItem>{' '}
							<SelectItem value='system'>700 tys.–1,5 mln zł</SelectItem>
							<SelectItem value='system'>powyżej 1,5 mln zł</SelectItem>
							<SelectItem value='system'>jeszcze nie wiem</SelectItem>
						</SelectContent>
					</Select>
					<Select>
						<SelectTrigger className='w'>
							<SelectValue placeholder='Etap projektu' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='light'>koncepcja</SelectItem>
							<SelectItem value='dark'>projekt wykonawczy</SelectItem>
							<SelectItem value='system'>realizacja</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
			<FormConsents />
			<div className={`flex flex-col gap-4 pt-4 xl:mr-4 xl:items-end`}>
				<div className={`grid gap-2`}>
					<div className={`flex items-start xl:items-center`}>
						<Input
							className={`mr-4 h-auto w-fit py-4 pr-0 placeholder:text-[20px] placeholder:text-black xl:text-[20px]`}
							placeholder={'Kod rabatowy'}
						/>

						<span className={`text-[32px] text-nowrap xl:text-[40px]`}>39 PLN</span>
					</div>
					<Button onClick={inProgress} variant={'mood'} size={`lg`} className={`w-fit xl:w-full`}>
						Przejdź do płatności
					</Button>
				</div>
			</div>
		</section>
	);
}
