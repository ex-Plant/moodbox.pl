import { moodboxInfo } from '@/lib/temp/temp';

type PropsT = {};

export default function Faq({}: PropsT) {
	return (
		<>
			{moodboxInfo.sections.map((section) => {
				return (
					<section key={section.title}>
						<h3>{section.title}</h3>
						<div dangerouslySetInnerHTML={{ __html: section.content }} />
					</section>
				);
			})}
		</>
	);
}
