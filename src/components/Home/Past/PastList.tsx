import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		<div className="pb-5">
			Bioengineering Intern, Stanford Institutes of Medicinal Research (Summer 2025).
		</div>

		<div>Selected 1 of 20 from 1,800+ applicants; designed a single-channel portable fNIRS device with custom PCB under strict weight and cost constraints.</div>
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		Founder & Product Lead, Neuropod Technologies (Aug 2024 – Jun 2025): built a behind-the-ear EEG platform with custom PCB and BLE transmission, validated through wear and stress testing.
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		Project Intern, Solo Technologies (Sep 2024 – Mar 2025): shipped an on-device iOS flagship product under strict model-size, inference, and latency constraints; presented at CES 2026.
	</motion.li>
);

const Item4 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">04</p>
		Co-founder & CTO, Share-On: launched a teen mental-health platform to 7,000+ users in three months and participated in ElevX! Cohort 13.
	</motion.li>
);

const Item5 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">05</p>
		Independent Research, Peter Tass Lab (Stanford): published comparative EEG seizure prediction analysis and presented as the only high school presenter at IEEE Body Sensor Networks.
	</motion.li>
);

const PastList = [Item1, Item2, Item3, Item4, Item5];

export default PastList;
