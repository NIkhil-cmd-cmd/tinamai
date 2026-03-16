import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		incoming freshman at Stanford University with intended focus in biomechanical engineering, computer science, and symbolic systems.
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		I build wearable neurotechnology and biomedical devices, with projects spanning portable EEG and fNIRS systems.
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		Most of my work sits at the intersection of hardware design, signal processing, and on-device machine learning for clinical impact.
	</motion.li>
);

const Item4 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">04</p>
		I care about turning unmet healthcare needs into practical products through iterative prototyping and real-world testing.
	</motion.li>
);

const CurrentList = [Item1, Item2, Item3, Item4];

export default CurrentList;
