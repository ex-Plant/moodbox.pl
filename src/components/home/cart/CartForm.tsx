import { Tip } from '@/components/common/Tip';
import FormConsents from '@/components/home/cart/FormConsents';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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

				<div className={`mr-4 grid grid-cols-2 gap-4`}>
					<Input placeholder={'Nazwa firmy / pracowni'} />
					<Input placeholder={'NIP'} />
					<Input placeholder={'E-mail'} />
					<Input placeholder={'Link do strony www'} />
					<Input placeholder={'Liczba projektów rocznie'} />
				</div>
			</div>
			<div>
				<h4 className={`text-[18px] font-bold`}>Informacje dodatkowe o Twoim projekcie </h4>
				<div className={`mr-4 grid grid-cols-2 gap-4 pt-2`}>
					<Input placeholder={'Miejscowość'} />
					<Select>
						<SelectTrigger className='w'>
							<SelectValue placeholder='Typ' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='light'>Light</SelectItem>
							<SelectItem value='dark'>Dark</SelectItem>
							<SelectItem value='system'>System</SelectItem>
						</SelectContent>
					</Select>
					<Select>
						<SelectTrigger className='w'>
							<SelectValue placeholder='Metraż' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='light'>Light</SelectItem>
							<SelectItem value='dark'>Dark</SelectItem>
							<SelectItem value='system'>System</SelectItem>
						</SelectContent>
					</Select>
					<Input placeholder={'Termin realizacji'} />
					<Select>
						<SelectTrigger className='w'>
							<SelectValue placeholder='Budżet' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='light'>Light</SelectItem>
							<SelectItem value='dark'>Dark</SelectItem>
							<SelectItem value='system'>System</SelectItem>
						</SelectContent>
					</Select>
					<Select>
						<SelectTrigger className='w'>
							<SelectValue placeholder='Etap projektu' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='light'>Light</SelectItem>
							<SelectItem value='dark'>Dark</SelectItem>
							<SelectItem value='system'>System</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
			<FormConsents />
			<div className={`mr-4 flex flex-col items-end gap-4 pt-4`}>
				<div className={`grid gap-2`}>
					<div className={`flex items-center`}>
						<Input
							className={`mr-4 h-auto w-fit py-4 pr-0 text-[20px] placeholder:text-[20px] placeholder:text-black`}
							placeholder={'Kod rabatowy'}
						/>

						<span className={`text-[40px] text-nowrap`}>49 PLN</span>
					</div>
					<Button onClick={inProgress} variant={'mood'} size={`lg`} className={`w-full`}>
						Przejdź do płatności
					</Button>
				</div>
			</div>
		</section>
	);
}
