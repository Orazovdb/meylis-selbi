/** Путь к аудио в public/. Положите файл "I Think They Call This Love" как i-think-they-call-this-love.mp3 */
export const weddingData = {
	musicUrl: "/lucas.mp3",
	/** Фото пары на первом экране (при клике открывается приглашение). Путь от корня сайта для совместимости с мессенджерами и PWA. */
	couplePhotoUrl: "/rh.jpeg",
	groomName: "Baýram",
	brideName: "Gurbansoltan",
	/** Телефоны для связи */
	groomPhone: "",
	bridePhone: "",
	/** Логотип в блоке контактов (путь в public/) */
	logoUrl: "/logo-red.png",
	/** Доп. контакт (организатор и т.д.) */
	organizerPhone: "+99362090252",
	organizerPhone2: "+99361484840",
	organizerLabel: "Siziň sargydyňyz — biziň jogapkärçiligimiz!",
	/** Ссылка на Instagram */
	instagramUrl: "https://www.instagram.com/invitationsred",
	instagramLabel: "Instagram",
	/** Birinji toý senesi (hero, calendar aý) */
	weddingDate: new Date("2026-04-09T18:00:00"),
	/** Ähli toý seneleri — countdown iň ýakyn toýa çenli */
	celebrationDates: [
		new Date("2026-04-09T18:00:00"),
		new Date("2026-04-14T18:00:00")
	],
	venue: "Altyn Asyr Toý Mekany",
	venueAddress: "Altyn Asyr şäheri",
	/** Blok «Ýerleşýän ýeri» — iki aýratyn toý */
	locationBlocks: [
		{
			dateLabel: "9 aprel 2026",
			subtitle: "Gyz tarapy (Gurbansoltan)",
			place: "Altyn Asyr şäheri, «Altyn Asyr Toý Mekany»",
			mapUrl: ""
		},
		{
			dateLabel: "14 aprel 2026",
			subtitle: "Oglan tarapy (Baýram)",
			place: "Aşgabat şäheri, «Bahar Toý Mekany» (Arkaç söwda merkezi)",
			hostsNote: "Baýram we Gurbansoltan",
			mapUrl: ""
		}
	],
	/** Фото ресторана (URL или путь в public/) */
	venuePhotoUrl: "/restaurant.png",
	/** Ссылка на карту (Google Maps и т.д.) — umumy */
	mapUrl: "",
	/** Важные даты (отсортированы по дате) */
	events: [
		{
			date: "2026-04-09",
			time: "18:00",
			title: "Toý",
			place: "Gyz tarapy — Altyn Asyr şäheri, «Altyn Asyr Toý Mekany»"
		},
		{
			date: "2026-04-14",
			time: "18:00",
			title: "Toý (Baýram we Gurbansoltan)",
			place:
				"Oglan tarapy — Aşgabat şäheri, «Bahar Toý Mekany» (Arkaç söwda merkezi)"
		}
	],
	schedule: [
		{
			time: "18:00",
			title: "Myhmanlary garşylamak",
			description: "Myhmanlaryň ýygnanmagy"
		},
		{
			time: "19:30",
			title: "Ýaşlary garşylamak",
			description: ""
		},
		{
			time: "20:30",
			title: "Gutlaglar",
			description: ""
		},
		{
			time: "21:30",
			title: "Tort kesmek we aýdym saz",
			description: ""
		},
		{
			time: "23:00",
			title: "Toýuň jemlenişi",
			description: ""
		}
	],
	/** Aýdym saz — tüýe gelýän aýdymçylar (adlary wedding.ts-da üýtgediň) */
	guestSingersTitle: "Toýuň bagşylary",
	guestSingers: [
		{
			name: "Esasy bagşy Mekan Ataýyew",
			note: "",
			photoUrl: "/singers/singer_1.jpeg"
		},
		{ name: "Lucas", note: "", photoUrl: "/singers/singer_2.jpeg" },
		{
			name: "Dz-Ed Bk media show",
			note: "",
			photoUrl: "/singers/singer_3.jpeg"
		}
	],
	/** Контакты для связи (имя и номер) */
	contactList: [{ name: "Baýram", phone: "+99362320000" }],
	photos: [
		"https://picsum.photos/400/500?random=11",
		"https://picsum.photos/400/500?random=22",
		"https://picsum.photos/400/500?random=33",
		"https://picsum.photos/400/500?random=44",
		"https://picsum.photos/400/500?random=55",
		"https://picsum.photos/400/500?random=66"
	]
} as const;

export function getCelebrationYmdSet(): Set<string> {
	return new Set(
		weddingData.celebrationDates.map(d => {
			const y = d.getFullYear();
			const m = String(d.getMonth() + 1).padStart(2, "0");
			const day = String(d.getDate()).padStart(2, "0");
			return `${y}-${m}-${day}`;
		})
	);
}

/** Countdown üçin iň ýakyn geljekdäki toý senesi */
export function getNextCelebrationDate(now: Date = new Date()): Date {
	const sorted = [...weddingData.celebrationDates].sort(
		(a, b) => a.getTime() - b.getTime()
	);
	for (const d of sorted) {
		if (d.getTime() > now.getTime()) return d;
	}
	return sorted[sorted.length - 1] ?? weddingData.weddingDate;
}

const MONTHS_SHORT = [
	"ýanwar",
	"fewral",
	"mart",
	"aprel",
	"maý",
	"iýun",
	"iýul",
	"awgust",
	"sentýabr",
	"oktýabr",
	"noýabr",
	"dekabr"
] as const;

/** Hero, preloader, schedule başlygy üçin — «9 we 14 aprel 2026» */
export function formatCelebrationSummary(): string {
	const dates = [...weddingData.celebrationDates].sort(
		(a, b) => a.getTime() - b.getTime()
	);
	if (dates.length === 0) {
		const d = weddingData.weddingDate;
		return `${d.getDate()} ${MONTHS_SHORT[d.getMonth()]} ${d.getFullYear()}`;
	}
	if (dates.length === 1) {
		const d = dates[0];
		return `${d.getDate()} ${MONTHS_SHORT[d.getMonth()]} ${d.getFullYear()}`;
	}
	const sameMonthYear = dates.every(
		d =>
			d.getMonth() === dates[0].getMonth() &&
			d.getFullYear() === dates[0].getFullYear()
	);
	if (sameMonthYear) {
		const days = dates.map(d => d.getDate()).join(" we ");
		const m = MONTHS_SHORT[dates[0].getMonth()];
		const y = dates[0].getFullYear();
		return `${days} ${m} ${y}`;
	}
	const parts = dates.map(d => {
		const day = d.getDate();
		const month = MONTHS_SHORT[d.getMonth()];
		const year = d.getFullYear();
		return `${day} ${month} ${year}`;
	});
	return `${parts.slice(0, -1).join(", ")} we ${parts[parts.length - 1]}`;
}
