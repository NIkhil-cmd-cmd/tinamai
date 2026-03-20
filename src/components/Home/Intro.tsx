"use client";

import Image from "next/image";
import ScrambleText from "../Global/ScrambleText";
import Link from "../Global/Link";

const Intro = () => {
	return (
		<section className="border-y border-white/10 py-8 sm:py-10">
			<div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-start">
				<div className="space-y-6 flex-1">
					<h1 className="font-serif2 text-3xl sm:text-5xl leading-tight text-slate-100">
						hi, i&apos;m nikhil.
					</h1>
				<ScrambleText
					text="biomechanical engineering & computer science @ Stanford, building wearable neurotechnology at the intersection of bioengineering, hardware, and machine learning."
					settings={{ speed: 0.5 }}
					className="text-sm sm:text-base leading-relaxed max-w-3xl text-slate-300"
					replayOn={false}
				/>
					<div className="pt-4 border-t border-white/10 space-y-3">
						<p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-300">/ Connect</p>
						<div className="flex flex-wrap items-center gap-x-4 gap-y-2">
							<Link text="email" href="mailto:krishnaswamynikhil@gmail.com" className="text-slate-100" />
							<Link text="resume" href="/media/nikhil_resume.pdf" className="text-slate-100" />
							<Link text="github" href="https://github.com/NIkhil-cmd-cmd" className="text-slate-100" />
							<Link text="linkedin" href="https://linkedin.com/in/nikhil-krishnaswamy" className="text-slate-100" />
							<Link text="photography" href="/photography" className="text-slate-100" />
						</div>
					</div>
				</div>
				<div className="lg:flex-shrink-0 inline-block overflow-hidden rounded-lg border border-white/20 bg-white/8 p-2">
					<Image
						src="/profile.jpg"
						alt="Nikhil Krishnaswamy"
						height={320}
						width={240}
						quality={90}
						priority
						itemProp="image"
						className="rounded-md transition-transform duration-300 hover:scale-[1.02]"
					/>
				</div>
			</div>
		</section>
	);
};

export default Intro;
