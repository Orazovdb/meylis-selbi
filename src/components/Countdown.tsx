import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getNextCelebrationDate } from "../data/wedding";
import "./Countdown.css";

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
	const now = new Date();
	const diff = target.getTime() - now.getTime();
	if (diff <= 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	}
	return {
		days: Math.floor(diff / (1000 * 60 * 60 * 24)),
		hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
		minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
		seconds: Math.floor((diff % (1000 * 60)) / 1000)
	};
}

const container = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.12 }
	}
};

const item = {
	hidden: { opacity: 0, scale: 0, rotateY: 90 },
	visible: {
		opacity: 1,
		scale: 1,
		rotateY: 0,
		transition: { type: "spring", stiffness: 200, damping: 18 }
	}
};

const UNITS: { key: keyof TimeLeft; label: string }[] = [
	{ key: "days", label: "gün" },
	{ key: "hours", label: "sagat" },
	{ key: "minutes", label: "minut" },
	{ key: "seconds", label: "sekunt" }
];

export function Countdown() {
	const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
		getTimeLeft(getNextCelebrationDate())
	);

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft(getNextCelebrationDate()));
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<section className="countdown-section">
			<motion.h2
				className="countdown-title"
				initial={{ opacity: 0, x: -40 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				Toýa çenli
			</motion.h2>

			<motion.div
				className="countdown-grid"
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				{UNITS.map(({ key, label }) => (
					<motion.div key={key} className="countdown-cell" variants={item}>
						<span className="countdown-value">
							{String(timeLeft[key]).padStart(2, "0")}
						</span>
						<span className="countdown-label">{label}</span>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
