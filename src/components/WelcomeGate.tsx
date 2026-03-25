import { motion } from "framer-motion";
import { weddingData } from "../data/wedding";
import "./WelcomeGate.css";

interface WelcomeGateProps {
	onOpen: () => void;
}

export function WelcomeGate({ onOpen }: WelcomeGateProps) {
	return (
		<motion.div
			className="welcome-gate"
			role="dialog"
			aria-modal="true"
			aria-labelledby="welcome-gate-title"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.45 }}
		>
			<div className="welcome-gate-backdrop" aria-hidden />
			<motion.div
				className="welcome-gate-card"
				initial={{ opacity: 0, y: 20, scale: 0.98 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
			>
				<p className="welcome-gate-eyebrow">Toýa çakylyk</p>
				<h1 id="welcome-gate-title" className="welcome-gate-names">
					{weddingData.groomName}
					<div className="welcome-gate-amp-wrapper">
						<span className="welcome-gate-amp">&</span>
					</div>
					{weddingData.brideName}
				</h1>
				<button type="button" className="welcome-gate-btn" onClick={onOpen}>
					Çakylygy açmak üçin basyň
				</button>
			</motion.div>
		</motion.div>
	);
}
