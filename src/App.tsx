import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import { CouplePhoto } from "./components/CouplePhoto";
import { InvitationContent } from "./components/InvitationContent";
import { WelcomeGate } from "./components/WelcomeGate";
import { weddingData } from "./data/wedding";

function App() {
	/** Always show on each page load so music can start from a user gesture */
	const [showWelcomeGate, setShowWelcomeGate] = useState(true);
	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		window.scrollTo(0, 0);
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	}, []);

	useEffect(() => {
		if (showWelcomeGate) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [showWelcomeGate]);

	const handleOpenInvitation = () => {
		const audio = audioRef.current;
		if (audio) {
			audio.muted = false;
			void audio.play().catch(() => {});
		}
		setShowWelcomeGate(false);
		window.scrollTo(0, 0);
	};

	return (
		<div className="app">
			<audio
				ref={audioRef}
				src={weddingData.musicUrl}
				loop
				preload="auto"
				playsInline
			/>
			{showWelcomeGate && <WelcomeGate onOpen={handleOpenInvitation} />}
			<Analytics />
			<SpeedInsights route="/" />
			<CouplePhoto />
			<InvitationContent />
		</div>
	);
}

export default App;
