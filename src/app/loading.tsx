'use client';

import LogoSvg from '@/components/common/Logo';

export default function Loading() {
	return (
		<div className={`pointer-events-none flex h-screen w-screen items-center justify-center`}>
			<LogoSvg asButon={false} className={`animate-bounce duration-500`} />
		</div>
	);
}
