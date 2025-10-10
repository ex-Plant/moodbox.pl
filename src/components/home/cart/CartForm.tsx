import FormConsents from '@/components/home/cart/FormConsents';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type PropsT = {};

export default function CartForm({}: PropsT) {
	return (
		<section className={`grid gap-4`}>
			<div>
				<h4 className={`text-[18px] font-bold`}>Dane firmowe</h4>
				<div className={`mr-4 grid grid-cols-2 gap-4 pt-2`}>
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
				<div className={`flex items-center`}>
					<Input
						className={`mr-4 h-auto w-fit py-4 text-[20px] placeholder:text-[20px] placeholder:text-black`}
						placeholder={'Kod rabatowy'}
					/>

					<span className={`text-[40px] text-nowrap`}>49 PLN</span>
				</div>
				<Button variant={'mood'} size={`lg`} className={``}>
					Przejdź do płatności
				</Button>
			</div>
		</section>
	);
}
