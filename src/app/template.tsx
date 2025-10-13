'use client';

import { AnimatePresence, motion } from 'framer-motion';

type PropsT = {
	children: React.ReactNode;
};

export default function Template({ children }: PropsT) {
	return (
		<AnimatePresence mode='wait'>
			<motion.div
				// key={pathname}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
