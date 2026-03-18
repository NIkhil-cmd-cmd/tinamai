"use client";

import { useMemo, useState } from "react";
import Intro from "./Intro";
import Link from "../Global/Link";
import Image from "next/image";
import ScrambleText from "../Global/ScrambleText";

type PortfolioItem = {
	id: string;
	section: "Research" | "Internships" | "Awards";
	title: string;
	meta: string;
	summary: string;
	details: string[];
	image?: string;
};

const portfolioItems: PortfolioItem[] = [
	{
		id: "research-tvb",
		section: "Research",
		title: "Seizure Suppression Research (The Virtual Brain)",
		meta: "Computational Neuroscience",
		image: "/media/tvb1.png",
		summary: "Researched seizure suppression and propagation dynamics using neural mass modeling.",
		details: [
			"Built comparative analysis of EEG-based seizure detection and forecasting pipelines.",
			"Evaluated supervised learning strategies for seizure prediction across clinical scenarios.",
			"Collaborated on The Virtual Brain (TVB) simulations to study neuromodulation interventions.",
			"Presented findings at IEEE Body Sensor Networks conference.",
		],
	},
	{
		id: "research-neuropod",
		section: "Research",
		title: "NeuroPoD — Portable EEG Device",
		meta: "Biomedical Device Engineering",
		image: "/media/tvb2.mov",
		summary: "Built a portable EEG device for real-time seizure prediction and monitoring.",
		details: [
			"Developed compact hardware integrating high-fidelity EEG signal conditioning.",
			"Optimized for clinical deployment with sub-gram latency and battery efficiency.",
			"Validated signal quality against clinical-grade equipment in preliminary trials.",
			"Designed for accessibility and portability across diverse care environments.",
		],
	},
	{
		id: "research-shareon",
		section: "Research",
		title: "Share-On — Mental Health & Productivity App",
		meta: "Full-Stack iOS Development",
		image: "/media/shareon1.png",
		summary: "Developed a mental health and productivity application for teens.",
		details: [
			"Built iOS app combining mood tracking with collaborative productivity features.",
			"Integrated machine learning models for personalized wellness recommendations.",
			"Designed privacy-first architecture with local data encryption.",
			"Achieved 10k+ downloaded in beta testing with strong retention metrics.",
		],
	},
	{
		id: "research-prospector",
		section: "Research",
		title: "The Prospector App",
		meta: "iOS + Backend Development",
		image: "/media/tvb3.png",
		summary: "Developed discovery and recommendation engine for mobile users.",
		details: [
			"Built algorithmic feed aggregation serving personalized content recommendations.",
			"Implemented real-time sync across iOS and cloud backend infrastructure.",
			"Optimized database queries achieving sub-300ms response times at scale.",
			"Designed modular architecture supporting A/B testing and feature experimentation.",
		],
	},
	{
		id: "internship-simr-fnirs",
		section: "Internships",
		title: "Stanford Institutes of Medicinal Research (fNIRS Device)",
		meta: "Bioengineering Intern | Jun – Aug 2025",
		image: "/media/simr1.png",
		summary: "Bootstrapped an fNIRS device to objectively measure antidepressant response.",
		details: [
			"Selected as 1 of 20 interns from 1,800+ applicants to SIMR program.",
			"Built a single-channel portable fNIRS system capturing hemodynamic signals.",
			"Designed custom PCB (78.88mm x 43.26mm) with dual photodiodes and 740/850nm LEDs.",
			"Validated hardware meeting 100g weight and $50 unit cost constraints.",
			"Addressed subjectivity and latency issues of traditional mental health surveys.",
		],
	},
	{
		id: "internship-healthify",
		section: "Internships",
		title: "Healthify — On-Device AI Platform",
		meta: "AI/ML Engineering",
		image: "/media/simr2.png",
		summary: "Built on-device AI application optimized for mobile inference.",
		details: [
			"Developed lightweight neural network models running natively on iOS.",
			"Implemented quantization and pruning to maintain <50ms inference latency.",
			"Integrated end-to-end encryption for PHI compliance and privacy.",
			"Shipped features used by 50k+ healthcare practitioners.",
		],
	},
	{
		id: "internship-sip",
		section: "Internships",
		title: "tDCS Research for Speech Stimulation (SIP Lab)",
		meta: "Neurotechnology Research",
		image: "/media/simr0.mov",
		summary: "Researched transcranial direct current stimulation for speech therapy applications.",
		details: [
			"Designed tDCS electrode montage optimization for targeted cortical stimulation.",
			"Conducted clinical feasibility studies measuring neuroplastic outcomes.",
			"Built signal processing pipeline for real-time EEG feedback during stimulation.",
			"Collaborated with speech pathologists on therapeutic protocol development.",
		],
	},
	{
		id: "awards-scholarships",
		section: "Awards",
		title: "Scholarships + National Recognition",
		meta: "Academic and impact-based honors",
		summary: "Recognized for academic excellence, innovation, and community impact.",
		details: [
			"Pete Conrad Challenge Power Pitch Award, International 2025.",
			"Bryan Cameron Impact Scholar Finalist (2.5% acceptance rate).",
			"Coca-Cola Scholar Semifinalist (1.2% applicant rate).",
		],
	},
	{
		id: "awards-research-engineering",
		section: "Awards",
		title: "Research + Engineering Competitions",
		meta: "IEEE and science fair distinctions",
		summary: "Top placements across research conferences and engineering competitions.",
		details: [
			"Best Poster at IEEE MIT Undergraduate Research Technology Conference.",
			"Presented research as only high school speaker at IEEE Body Sensor Networks.",
			"1st Place, California Science and Engineering Fair — Biomedical Engineering.",
			"2nd Place CSEF — Computational Systems: Medical.",
		],
	},
	{
		id: "awards-innovation-creative",
		section: "Awards",
		title: "Innovation + Creative Awards",
		meta: "State and national competitions",
		summary: "Honors spanning technical innovation, visual storytelling, and entrepreneurship.",
		details: [
			"State Winner, Samsung Solve for Tomorrow — awarded $12k in Samsung tech for school.",
			"1st Place, School Photographers of America Student Competition.",
		],
	},
];

const sectionOrder: Array<PortfolioItem["section"]> = ["Research", "Internships", "Awards"];

export default function Home() {
	const [activeId, setActiveId] = useState<string | null>(null);

	const groupedItems = useMemo(() => {
		return sectionOrder.map((section) => ({
			section,
			items: portfolioItems.filter((item) => item.section === section),
		}));
	}, []);

	const activeItem = portfolioItems.find((item) => item.id === activeId) ?? null;

	return (
		<main className="min-h-screen p-8 sm:p-14">
			<div className="mx-auto w-full max-w-5xl space-y-14 relative">
				<aside className="body text-base sm:fixed sm:right-6 sm:top-10 sm:text-right space-y-2 z-30">
					<p className="text-slate-300">contact + links</p>
					<div className="flex sm:flex-col flex-wrap gap-x-3 gap-y-2 sm:items-end">
						<Link text="email" href="mailto:krishnaswamynikhil@gmail.com" />
						<Link text="phone" href="tel:+14085500924" />
						<Link text="resume" href="/resume.pdf" />
						<Link text="github" href="https://github.com/" />
						<Link text="linkedin" href="https://linkedin.com/" />
						<Link text="photography" href="/photography" />
						<Link text="lists" href="/lists" />
					</div>
				</aside>
				<Intro />
				<section className="border-t border-slate-800 pt-10 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
					<div className="lg:col-span-3 space-y-8">
						{groupedItems.map(({ section, items }) => (
							<div key={section} className="space-y-3">
								<h2 className="font-mono text-sm text-slate-300 uppercase tracking-wide">{section.toLowerCase()}</h2>
								<ul className="space-y-3">
									{items.map((item) => (
										<li
											key={item.id}
											onMouseEnter={() => setActiveId(item.id)}
											onFocus={() => setActiveId(item.id)}
											tabIndex={0}
											className="group cursor-pointer border-b border-white/10 pb-2 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
										>
											<ScrambleText
												text={item.summary}
												settings={{ speed: 1.6, tick: 1, step: 3.5, scramble: 4, chance: 1 }}
												className={`text-base leading-relaxed transition-colors duration-200 ${
													activeId === item.id ? "text-slate-100" : "text-slate-300"
												}`}
											/>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					<div className="lg:col-span-2 lg:sticky lg:top-24">
						<div className="rounded-2xl border border-white/20 bg-white/8 backdrop-blur-xl p-4 min-h-[420px]">
							{activeItem ? (
								<div className="space-y-4">
									<div className="rounded-xl overflow-hidden border border-white/20 bg-slate-900/60 h-48 flex items-center justify-center">
										{activeItem.image ? (
											<Image src={activeItem.image} alt={activeItem.title} width={700} height={420} className="h-full w-full object-cover" />
										) : (
											<p className="body text-slate-400 text-center px-4">add a portfolio image for this entry to preview it here</p>
										)}
									</div>
									<div>
										<p className="body text-slate-100 text-base">{activeItem.title}</p>
										<p className="body text-slate-400 pt-1">{activeItem.meta}</p>
										<ul className="pt-3 space-y-2">
											{activeItem.details.map((line) => (
												<li key={line} className="body text-slate-300 leading-relaxed">
													• {line}
												</li>
											))}
										</ul>
									</div>
								</div>
							) : (
								<div className="h-full min-h-[380px] flex items-center justify-center">
									<p className="body text-slate-400 text-center max-w-[22ch]">hover an entry on the left to see its details and portfolio preview here</p>
								</div>
							)}
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
