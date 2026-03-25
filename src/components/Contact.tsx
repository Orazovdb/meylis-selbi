import { motion } from "framer-motion";
import { weddingData } from "../data/wedding";
import "./Contact.css";

function formatWeddingDate(date: Date): string {
	const d = date.getDate();
	const m = date.getMonth() + 1;
	const y = date.getFullYear();
	return `${String(d).padStart(2, "0")}.${String(m).padStart(2, "0")}.${y}`;
}

function CallIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="contact-call-icon"
			aria-hidden
		>
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
		</svg>
	);
}

function telLink(phone: string): string {
	const digits = phone.replace(/\D/g, "");
	if (digits.length >= 9 && digits.startsWith("8")) {
		return `+993${digits.slice(1)}`;
	}
	return digits.startsWith("993") ? `+${digits}` : `+993${digits}`;
}

export function Contact() {
	const hasList = weddingData.contactList && weddingData.contactList.length > 0;
	const hasCouple = weddingData.groomPhone || weddingData.bridePhone;
	if (!hasList && !hasCouple) return null;

	return (
		<section className="contact-section">
			<motion.div
				className="contact-block"
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<p className="contact-wedding-date">
					Toý:{" "}
					{weddingData.celebrationDates
						.map((d) => formatWeddingDate(d))
						.join(" we ")}
				</p>
				<h2 className="contact-title">Habarlaşmak üçin</h2>

				<p className="contact-desc">
					Ähli soraglaryňyz üçin
					<br />
					bize ýüz tutup bilersiňiz
				</p>

				{hasList && (
					<div className="contact-couple contact-couple_list">
						{weddingData.contactList.map((c, i) => (
							<div key={i} className="contact-card">
								<p className="contact-name">{c.name}</p>
								<a href={`tel:${telLink(c.phone)}`} className="contact-phone">
									{c.phone}
								</a>
								<a
									href={`tel:${telLink(c.phone)}`}
									className="contact-call"
									aria-label="Jaň et"
								>
									<CallIcon />
								</a>
							</div>
						))}
					</div>
				)}

				{hasCouple && (
					<div className="contact-couple">
						{weddingData.groomPhone && (
							<div className="contact-card">
								<p className="contact-name">{weddingData.groomName}</p>
								<a
									href={`tel:${String(weddingData.groomPhone).replace(/\s/g, "")}`}
									className="contact-phone"
								>
									{String(weddingData.groomPhone)}
								</a>
								<a
									href={`tel:${String(weddingData.groomPhone).replace(/\s/g, "")}`}
									className="contact-call"
									aria-label="Jaň et"
								>
									<CallIcon />
								</a>
							</div>
						)}
						{weddingData.bridePhone && (
							<div className="contact-card">
								<p className="contact-name">{weddingData.brideName}</p>
								<a
									href={`tel:${String(weddingData.bridePhone).replace(/\s/g, "")}`}
									className="contact-phone"
								>
									{String(weddingData.bridePhone)}
								</a>
								<a
									href={`tel:${String(weddingData.bridePhone).replace(/\s/g, "")}`}
									className="contact-call"
									aria-label="Jaň et"
								>
									<CallIcon />
								</a>
							</div>
						)}
					</div>
				)}
			</motion.div>

			<motion.div
				className="contact-closing-block"
				initial={{ opacity: 0, scale: 0.88 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
			>
				<p className="contact-closing">Size uly hormat bilen garaşýarys!</p>
				<div className="contact-closing-ornament" aria-hidden />
				<p className="contact-closing-text">
					Siziň gatnaşmagyňyz bilen, <br />
					biziň toýumyz has-da aýratyn güne öwrüler!
				</p>
				<p className="contact-closing-names">
					{weddingData.groomName} & {weddingData.brideName}
				</p>
			</motion.div>
		</section>
	);
}
