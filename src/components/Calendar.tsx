import { motion } from "framer-motion";
import "./Calendar.css";

const WEEKDAYS = ["Du", "Si", "Ça", "Pe", "An", "Şe", "Ýe"];
const MONTHS_TM = [
	"Ýanwar", "Fewral", "Mart", "Aprel", "Maý", "Iýun",
	"Iýul", "Awgust", "Sentýabr", "Oktýabr", "Noýabr", "Dekabr",
];

function HeartOutline() {
	return (
		<svg
			className="calendar-heart-svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden
		>
			<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
		</svg>
	);
}

interface CalendarProps {
	date: Date;
	/** Bir gün bellik üçin */
	highlightDay?: number;
	/** Birnäçe gün (meselem, iki aýratyn toý) */
	highlightDays?: number[];
}

export function Calendar({ date, highlightDay, highlightDays }: CalendarProps) {
	const highlights =
		highlightDays && highlightDays.length > 0
			? highlightDays
			: highlightDay != null
				? [highlightDay]
				: [];
	const year = date.getFullYear();
	const month = date.getMonth();
	const firstDay = new Date(year, month, 1);
	const lastDay = new Date(year, month + 1, 0);
	const startWeekday = firstDay.getDay();
	const daysInMonth = lastDay.getDate();
	const offset = startWeekday === 0 ? 6 : startWeekday - 1;

	const cells: (number | null)[] = [];
	for (let i = 0; i < offset; i++) cells.push(null);
	for (let d = 1; d <= daysInMonth; d++) cells.push(d);

	return (
		<motion.div
			className="calendar"
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, ease: "easeOut" }}
		>
			<div className="calendar-header">
				<span className="calendar-month">{MONTHS_TM[month]}</span>
				<span className="calendar-year">{year}</span>
			</div>
			<div className="calendar-weekdays">
				{WEEKDAYS.map((d) => (
					<span key={d} className="calendar-weekday">
						{d}
					</span>
				))}
			</div>
			<div className="calendar-grid">
				{cells.map((day, i) => (
					<span
						key={i}
						className={`calendar-day ${day === null ? "calendar-day_empty" : ""} ${day != null && highlights.includes(day) ? "calendar-day_highlight" : ""}`}
					>
						{day != null && highlights.includes(day) ? (
							<span className="calendar-day-heart-wrap">
								<HeartOutline />
								<span className="calendar-day-num">{day}</span>
							</span>
						) : (
							<span className="calendar-day-num">{day ?? ""}</span>
						)}
					</span>
				))}
			</div>
		</motion.div>
	);
}
