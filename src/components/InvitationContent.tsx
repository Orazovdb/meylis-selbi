import { motion } from "framer-motion";
import { weddingData } from "../data/wedding";
import { Countdown } from "./Countdown";
import { DateLocation } from "./DateLocation";
import "./InvitationContent.css";
import { Schedule } from "./Schedule";

function InstagramIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="invitation-footer-ig-icon"
			aria-hidden
		>
			<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
		</svg>
	);
}

export function InvitationContent() {
	const hasOrganizer =
		weddingData.organizerPhone || weddingData.organizerPhone2;

	return (
		<main className="invitation-content">
			<Schedule />
			<DateLocation />
			<Countdown />
			<motion.footer
				className="invitation-footer"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
			>
				{hasOrganizer && (
					<div className="invitation-footer-organizer">
						<p className="invitation-footer-organizer-label">
							{weddingData.organizerLabel}
						</p>
						<div className="invitation-footer-organizer-phones">
							{weddingData.organizerPhone && (
								<a
									href={`tel:${String(weddingData.organizerPhone).replace(/\s/g, "")}`}
									className="invitation-footer-phone"
								>
									{weddingData.organizerPhone}
								</a>
							)}
							{weddingData.organizerPhone2 && (
								<a
									href={`tel:${String(weddingData.organizerPhone2).replace(/\s/g, "")}`}
									className="invitation-footer-phone"
								>
									{weddingData.organizerPhone2}
								</a>
							)}
						</div>
						{weddingData.instagramUrl && (
							<a
								href={weddingData.instagramUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="invitation-footer-instagram"
							>
								<InstagramIcon />
								{weddingData.instagramLabel}
							</a>
						)}
					</div>
				)}

				{weddingData.logoUrl && (
					<img
						src={weddingData.logoUrl}
						alt=""
						className="invitation-footer-logo"
					/>
				)}
			</motion.footer>
		</main>
	);
}
