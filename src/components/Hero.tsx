import Nav from '@/components/nav/Nav';
import { Button } from '@/components/ui/button';
import { tr } from '@/translations/pl';

type PropsT = {};

export default function Hero({}: PropsT) {
	return (
		<>
			<div className={`relative`}>
				<div className={`absolute inset-0`}>
					<Nav />
					<div>{tr.heroTitle}</div>
					<div>{tr.heroSubtitle}</div>
					<Button>{tr.heroButton}</Button>
				</div>
				<video
					muted={true}
					autoPlay={true}
					className={`max-h-[60vh] w-screen bg-red-200 object-cover`}
					src='/moodvid.mp4'
				/>
			</div>
		</>
	);
}
