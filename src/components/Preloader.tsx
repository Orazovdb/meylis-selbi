import { motion, AnimatePresence } from "framer-motion";
import { formatCelebrationSummary } from "../data/wedding";
import "./Preloader.css";

interface PreloaderProps {
	visible: boolean;
}

export function Preloader({ visible }: PreloaderProps) {
	const dateStr = formatCelebrationSummary();

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					className="preloader"
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.6, ease: "easeInOut" }}
				>
					<div className="preloader-content">
						<motion.p
							className="preloader-date"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							{dateStr}
						</motion.p>

						<motion.div
							className="preloader-spinner"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.4, delay: 0.5 }}
						>
							<svg className="preloader-ring" viewBox="0 0 50 50">
								<circle
									cx="25"
									cy="25"
									r="20"
									fill="none"
									stroke="currentColor"
									strokeWidth="1"
									opacity="0.15"
								/>
								<circle
									className="preloader-ring-arc"
									cx="25"
									cy="25"
									r="20"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeDasharray="31.4 94.2"
								/>
							</svg>
						</motion.div>

						<motion.p
							className="preloader-loading"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.4, delay: 0.7 }}
						>
							Ýüklenýär
						</motion.p>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
