import { Input } from '@/components/ui/input';

type PropsT = {};

export default function CartForm({}: PropsT) {
	return (
		<section className={`mr-[87px] grid gap-8`}>
			<div>
				<h4 className={`text-[18px] font-bold`}>Dane firmowe</h4>
				<div className={`grid grid-cols-2 gap-2 pt-2`}>
					<Input placeholder={'Nazwa firmy / pracowni'} />
					<Input placeholder={'Nazwa firmy / pracowni'} />
					<Input placeholder={'Nazwa firmy / pracowni'} />
					<Input placeholder={'Nazwa firmy / pracowni'} />
					<Input placeholder={'Nazwa firmy / pracowni'} />
				</div>
			</div>
			<div>
				<h4 className={`text-[18px] font-bold`}>Informacje dodatkowe o Twoim projekcie </h4>
				<div className={`grid grid-cols-2 gap-2 pt-2`}>
					<Input placeholder={'Nazwa firmy / pracowni'} />
					<Input placeholder={'Nazwa firmy / pracowni'} />
					<Input placeholder={'Nazwa firmy / pracowni'} />
					<Input placeholder={'Nazwa firmy / pracowni'} />
					<Input placeholder={'Nazwa firmy / pracowni'} />
				</div>
			</div>
		</section>
	);
}
