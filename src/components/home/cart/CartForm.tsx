import { DatePickerDemo } from '@/components/ui/DatePicker';
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
					<Input placeholder={'Nazwa firmy / pracowni'} />
					<Input placeholder={'Nazwa firmy / pracowni'} />
					<Input placeholder={'Nazwa firmy / pracowni'} />
					<Input placeholder={'Nazwa firmy / pracowni'} />
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
					<DatePickerDemo />

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
		</section>
	);
}
