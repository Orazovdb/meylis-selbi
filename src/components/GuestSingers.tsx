import { motion } from "framer-motion";
import { weddingData } from "../data/wedding";
import "./GuestSingers.css";

function MusicIcon() {
	return (
		<svg
			className="guest-singers-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden
		>
			<path d="M9 18V5l12-2v13" />
			<circle cx="6" cy="18" r="3" />
			<circle cx="18" cy="16" r="3" />
		</svg>
	);
}

type GuestSinger = { name: string; note: string; photoUrl?: string };

export function GuestSingers() {
	const singers = weddingData.guestSingers as readonly GuestSinger[];
	const visible = singers.filter(s => s.name.trim().length > 0);
	if (visible.length === 0) return null;

	return (
		<section
			className="guest-singers-section"
			aria-labelledby="guest-singers-heading"
		>
			<motion.div
				className="guest-singers-inner"
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.55, ease: "easeOut" }}
			>
				<div className="guest-singers-icon-wrap">
					<MusicIcon />
				</div>
				<h2 id="guest-singers-heading" className="guest-singers-title">
					{weddingData.guestSingersTitle}
				</h2>
				<ul className="guest-singers-list">
					{visible.map((s, i) => (
						<motion.li
							key={`${s.name}-${i}`}
							className="guest-singers-item"
							initial={{ opacity: 0, x: -12 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.08 }}
						>
							{s.photoUrl && (
								<div className="guest-singers-photo-wrap">
									<img
										className="guest-singers-photo"
										src={s.photoUrl}
										alt={s.name}
										loading="lazy"
										decoding="async"
									/>
								</div>
							)}
							<div className="guest-singers-text">
								<span className="guest-singers-name">{s.name}</span>
								{s.note && <span className="guest-singers-note">{s.note}</span>}
							</div>
						</motion.li>
					))}
				</ul>
			</motion.div>
		</section>
	);
}
