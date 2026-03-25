import { motion } from "framer-motion";
import { weddingData } from "../data/wedding";
import "./DateLocation.css";

export function DateLocation() {
	const bgUrl = weddingData.venuePhotoUrl;
	const blocks = weddingData.locationBlocks;

	return (
		<section className="date-location-section">
			{bgUrl ? (
				<div
					className="location-hero-bg"
					style={{ backgroundImage: `url(${bgUrl})` }}
					role="img"
					aria-label={weddingData.venue}
				/>
			) : (
				<div className="location-hero-bg location-hero-bg_fallback" aria-hidden />
			)}
			<div className="location-hero-scrim" aria-hidden />
			<motion.div
				className="location-hero-content"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.65, ease: "easeOut" }}
			>
				<h2 className="location-title">Ýerleşýän ýeri</h2>
				<div className="location-blocks">
					{blocks.map((block, i) => (
						<div key={i} className="location-block">
							<p className="location-block-date">{block.dateLabel}</p>
							<p className="location-block-subtitle">{block.subtitle}</p>
							<p className="location-desc location-block-place">{block.place}</p>
							{"hostsNote" in block && block.hostsNote ? (
								<p className="location-block-hosts">{block.hostsNote}</p>
							) : null}
							{block.mapUrl ? (
								<a
									href={block.mapUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="location-btn"
								>
									Kartada görüň
								</a>
							) : null}
						</div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
