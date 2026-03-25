import { motion } from "framer-motion";
import { weddingData } from "../data/wedding";
import "./CouplePhoto.css";

const LABEL = "Toýa çakylyk";

const letterContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.04 }
	}
};

const letterItem = {
	hidden: { opacity: 0, scale: 0.5, y: 4 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { duration: 0.4 }
	}
};

export function CouplePhoto() {
	return (
		<section className="hero">
			<motion.div
				className="hero-label-top"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<motion.span
					className="hero-label"
					variants={letterContainer}
					initial="hidden"
					animate="visible"
					transition={{ staggerChildren: 0.04 }}
				>
					{LABEL.split("").map((char, i) => (
						<motion.span
							key={i}
							className={`hero-label-char ${char === " " ? "hero-label-space" : ""}`}
							variants={letterItem}
							style={
								{
									display: char === " " ? "inline" : "inline-block",
									"--char-index": i
								} as React.CSSProperties
							}
						>
							{char === " " ? "\u00A0" : char}
						</motion.span>
					))}
				</motion.span>
			</motion.div>

			<div className="hero-photo">
				<img
					src={weddingData.couplePhotoUrl}
					alt={`${weddingData.groomName} & ${weddingData.brideName}`}
				/>
				<div className="hero-overlay" />
			</div>

			<div className="hero-content">
				<motion.div
					className="hero-ornament"
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
					aria-hidden
				>
					<svg viewBox="0 0 120 24" width="80" height="24">
						<line
							x1="0"
							y1="12"
							x2="40"
							y2="12"
							stroke="currentColor"
							strokeWidth="1"
							opacity="0.5"
						/>
						<circle
							cx="60"
							cy="12"
							r="4"
							fill="none"
							stroke="currentColor"
							strokeWidth="1"
							opacity="0.6"
						/>
						<line
							x1="80"
							y1="12"
							x2="120"
							y2="12"
							stroke="currentColor"
							strokeWidth="1"
							opacity="0.5"
						/>
					</svg>
				</motion.div>

				<motion.div
					className="hero-names-block"
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.7 }}
				>
					<h1 className="hero-names">
						{weddingData.groomName}
						<span className="hero-amp">&</span>
						{weddingData.brideName}
					</h1>
				</motion.div>

				<motion.div
					className="hero-ornament"
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
					aria-hidden
				>
					<svg viewBox="0 0 120 24" width="80" height="24">
						<line
							x1="0"
							y1="12"
							x2="40"
							y2="12"
							stroke="currentColor"
							strokeWidth="1"
							opacity="0.5"
						/>
						<circle
							cx="60"
							cy="12"
							r="4"
							fill="none"
							stroke="currentColor"
							strokeWidth="1"
							opacity="0.6"
						/>
						<line
							x1="80"
							y1="12"
							x2="120"
							y2="12"
							stroke="currentColor"
							strokeWidth="1"
							opacity="0.5"
						/>
					</svg>
				</motion.div>

				<motion.div
					className="hero-scroll"
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.6 }}
					transition={{ duration: 0.5, delay: 1.8 }}
				>
					<motion.svg
						className="hero-scroll-chevron"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						animate={{ y: [0, 5, 0] }}
						transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
					>
						<path d="M7 10l5 5 5-5" />
						<path d="M7 14l5 5 5-5" />
					</motion.svg>
					<span className="hero-scroll-text">Aşak</span>
				</motion.div>
			</div>
		</section>
	);
}
