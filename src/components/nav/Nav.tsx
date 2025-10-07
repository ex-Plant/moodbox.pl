import Link from 'next/link';

type PropsT = {};

export default function Nav({}: PropsT) {
	return (
		<>
			<nav className={`flex justify-between p-4 outline`}>
				<div className={`text-white`}>moodbox</div>
				<div className={`flex gap-4 text-white`}>
					<Link href={'/faq'}>FAQ</Link>
					<Link href={'/contact'}>Kontakt</Link>
				</div>
			</nav>
		</>
	);
}
