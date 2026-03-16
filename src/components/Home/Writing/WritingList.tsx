import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		<p>Stanford University (Fall 2026 incoming)</p>
		<p className="pt-2 ">Intended focus: Biomechanical Engineering, Computer Science, Symbolic Systems.</p>
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		<p>Cupertino High School</p>
		<p className="pt-2 ">Unweighted GPA 4.00, advanced coursework in physics, biology, calculus, and 16 AP classes.</p>
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		<p className="pb-2">Selected recognition: Pete Conrad Scholar, Bryan Cameron Impact Scholar Finalist, Coca-Cola Scholar Semifinalist, accepted research to IEEE conferences, and Best Poster at IEEE MIT URTC.</p>
	</motion.li>
);

const WritingList = [Item1, Item2, Item3];

export default WritingList;
