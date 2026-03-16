import React from "react";
import ScrambleText from "../Global/ScrambleText";
import { animations } from "../../constants";
import { motion } from "framer-motion";
import Link from "../Global/Link";

const Intro = () => {
	return (
		<div className="space-y-10">
			<ScrambleText text="Nikhil Krishnaswamy" settings={{ speed: 0.5 }} className="text-xl" />
			<ScrambleText text="incoming freshman at Stanford. building wearable neurotechnology at the intersection of bioengineering, hardware, and machine learning." settings={{ speed: 0.5 }} />

			<motion.div animate={{ opacity: 1, x: 0 }}>
				<motion.ul variants={animations.containerVariants} initial="hidden" animate="show" className="space-y-10">
					<motion.li variants={animations.itemVariants} className="body">
						<ScrambleText text="krishnaswamynikhil@gmail.com" />
					</motion.li>
					<motion.li variants={animations.itemVariants} className="body">
						<ScrambleText text="(408) 550-0924" />
					</motion.li>
					<motion.li variants={animations.itemVariants}>
						<ScrambleText text="Cupertino, California" />
					</motion.li>

					{/* nav */}
					<div className="space-y-3">
						<motion.li variants={animations.itemVariants} className="body">
							<ScrambleText text="ON HERE" />
						</motion.li>
						<div className="sm:block sm:-space-y-5 flex flex-wrap">
							<motion.li variants={animations.itemVariants} key={null}>
								<Link text="lists" href="/lists" className="pr-2 space-x-1" />
							</motion.li>
						</div>
					</div>

					{/* links */}
					<div className="space-y-3">
						<motion.li variants={animations.itemVariants} className="body">
							<ScrambleText text="LINKS" />
						</motion.li>
						<div className="sm:block sm:-space-y-5 flex flex-wrap">
							<motion.li variants={animations.itemVariants}>
								<ScrambleText text="GitHub" />
							</motion.li>
							<motion.li variants={animations.itemVariants}>
								<p className="pr-2 sm:pr-0 sm:invisible sm:block inline">•</p>
							</motion.li>
							<motion.li variants={animations.itemVariants}>
								<ScrambleText text="LinkedIn" />
							</motion.li>
						</div>
					</div>
				</motion.ul>
			</motion.div>
		</div>
	);
};

export default Intro;
