import { motion } from "framer-motion";
import { weddingData } from "../data/wedding";
import "./Dresscode.css";
import dresscodeImage from "/dresscode.jpeg";

const stagger = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const scaleIn = {
	hidden: { opacity: 0, scale: 0.85, rotate: -2 },
	visible: {
		opacity: 1,
		scale: 1,
		rotate: 0,
		transition: { duration: 0.55, ease: "easeOut" }
	}
};

export function Dresscode() {
	const dc = weddingData.dresscode;
	if (!dc) return null;

	return (
		<section className="dresscode-section">
			<motion.div
				className="dresscode-inner"
				initial={{ opacity: 0, filter: "blur(10px)", scale: 0.96 }}
				whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7, ease: "easeOut" }}
			>
				<h2 className="dresscode-title">Dress-kod</h2>

				{dc.description && <p className="dresscode-desc">{dc.description}</p>}

				<motion.div
					className="dresscode-figures"
					variants={stagger}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.div className="dresscode-figure" variants={scaleIn}>
						<img
							src={dresscodeImage}
							alt="Dresscode"
							className="dresscode-image"
						/>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
}
