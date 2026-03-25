import { motion } from "framer-motion";
import {
	formatCelebrationSummary,
	getCelebrationYmdSet,
	weddingData
} from "../data/wedding";
import { Calendar } from "./Calendar";
import "./Schedule.css";

const timeline = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.12 }
	}
};

const timelineItem = {
	hidden: { opacity: 0, y: 16 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
};

const ICONS = [
	<svg
		key="pin"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
		<circle cx="12" cy="10" r="3" />
	</svg>,
	<svg
		key="rings"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="9" cy="12" r="5" />
		<circle cx="15" cy="12" r="5" />
	</svg>,
	<svg
		key="cloche"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M12 2v2" />
		<path d="M8 6h8" />
		<path d="M6 8c0 6 2 10 6 12 4-2 6-6 6-12" />
		<ellipse cx="12" cy="8" rx="6" ry="2" />
	</svg>,
	<svg
		key="cake"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M8 14h8" />
		<path d="M6 18h12v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2z" />
		<path d="M6 10h12v8H6z" />
		<path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
	</svg>,
	<svg
		key="fireworks"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M12 2v2" />
		<path d="M12 20v2" />
		<path d="M4.93 4.93l1.41 1.41" />
		<path d="M17.66 17.66l1.41 1.41" />
		<path d="M2 12h2" />
		<path d="M20 12h2" />
		<path d="M6.34 17.66l-1.41 1.41" />
		<path d="M19.07 4.93l-1.41 1.41" />
		<path d="M12 8l-2 4 2 4 2-4z" />
		<path d="M8 12l-4 2 4 2 4-2z" />
	</svg>
];

function formatEventDate(dateStr: string): string {
	const [y, m, d] = dateStr.split("-").map(Number);
	return `${String(d).padStart(2, "0")}.${String(m).padStart(2, "0")}.${y}ý.`;
}

const celebrationYmdSet = getCelebrationYmdSet();

function isWeddingDay(dateStr: string): boolean {
	return celebrationYmdSet.has(dateStr);
}

export function Schedule() {
	const formattedDate = formatCelebrationSummary();
	const highlightDays = weddingData.celebrationDates.map((d) => d.getDate());
	const events = [...weddingData.events].sort(
		(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
	);

	return (
		<section className="schedule-section">
			{/* Header */}
			<motion.header
				className="schedule-header"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<p className="schedule-header-intro">
					Hormatly myhmanlar! <br />
					Sizi uly hormat bilen toýymyza çagyrýarys.
				</p>
				<p className="schedule-header-date">{formattedDate}</p>
			</motion.header>

			{/* Calendar — визуальный якорь даты */}
			<div className="schedule-calendar-wrap">
				<Calendar
					date={weddingData.weddingDate}
					highlightDays={highlightDays}
				/>
			</div>

			{/* Важные даты */}
			<motion.div
				className="schedule-block schedule-block_dates"
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.1 }}
			>
				<h2 className="schedule-block-title">Seneler</h2>
				<div className="schedule-events">
					{events.map((ev, i) => (
						<motion.div
							key={`${ev.date}-${ev.time}-${i}`}
							className={`schedule-event-row ${isWeddingDay(ev.date) ? "schedule-event-row_wedding" : ""}`}
							initial={{ opacity: 0, x: -12 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.35, delay: i * 0.05 }}
						>
							<span className="schedule-event-date">
								{formatEventDate(ev.date)}
							</span>
							<span className="schedule-event-time">{ev.time}</span>
							<div className="schedule-event-content">
								<span className="schedule-event-title">{ev.title}</span>
								<span className="schedule-event-place">{ev.place}</span>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>

			{/* Программа дня свадьбы */}
			<motion.div
				className="schedule-block schedule-block_program"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.4 }}
			>
				<h2 className="schedule-block-title">Günüň tertibi</h2>
				<motion.div
					className="schedule-timeline"
					variants={timeline}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<div className="schedule-timeline-track" aria-hidden />
					{weddingData.schedule.map((item, i) => (
						<motion.div
							key={i}
							className="schedule-card"
							variants={timelineItem}
						>
							<span className="schedule-card-time">{item.time}</span>
							<div className="schedule-card-icon" aria-hidden>
								{ICONS[i % ICONS.length]}
							</div>
							<div className="schedule-card-body">
								<h3 className="schedule-card-title">{item.title}</h3>
								{item?.description && (
									<p className="schedule-card-desc">{item?.description}</p>
								)}
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
}
