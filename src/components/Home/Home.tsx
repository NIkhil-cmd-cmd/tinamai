"use client";

import { useMemo, useState } from "react";
import Intro from "./Intro";
import Link from "../Global/Link";
import Image from "next/image";

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
		id: "research-tass-lab",
		section: "Research",
		title: "Peter Tass Lab, Stanford",
		meta: "Jun 2023 – Present",
		summary: "Computational neuroscience research focused on seizure prediction and suppression.",
		details: [
			"Built a comparative analysis of EEG-based seizure detection and seizure forecasting pipelines.",
			"Evaluated supervised learning strategies for forecasting performance across clinically relevant scenarios.",
			"Collaborated on neural mass model simulations using The Virtual Brain to study seizure suppression strategies.",
		],
	},
	{
		id: "research-ieee",
		section: "Research",
		title: "IEEE Research Track",
		meta: "Body Sensor Networks + Neural Engineering",
		summary: "Presented and published work in biomedical sensing and neuroengineering venues.",
		details: [
			"Presented as the only high school speaker at IEEE Body Sensor Networks.",
			"Accepted research to IEEE Neural Engineering and IEEE Body Sensor Networks.",
			"Framed technical findings around translational impact for practical clinical workflows.",
		],
	},
	{
		id: "internship-simr",
		section: "Internships",
		title: "Stanford Institutes of Medicinal Research",
		meta: "Bioengineering Intern | Jun – Aug 2025",
		summary: "Designed and validated a portable fNIRS biomedical device under strict constraints.",
		details: [
			"Selected as 1 of 20 interns from 1,800+ applicants.",
			"Designed a portable single-channel fNIRS system to capture oxy/deoxyhemoglobin signal dynamics.",
			"Built a custom PCB (78.88mm x 43.26mm) integrating dual photodiodes and 740/850nm LEDs.",
			"Iterated hardware design to satisfy 100g weight and $50 cost constraints.",
			"Ran repeated prototyping cycles including soldering, drop testing, and clinical wear validation.",
		],
	},
	{
		id: "internship-solo",
		section: "Internships",
		title: "Solo Technologies",
		meta: "Project Intern | Sep 2024 – Mar 2025",
		summary: "Built cloud-free iOS AI experiences under model-size and latency constraints.",
		details: [
			"Developed on-device iOS product functionality for privacy-preserving, cloud-free AI workflows.",
			"Optimized for strict inference-time, model-size, and responsiveness constraints.",
			"Presented product direction and technical outcomes at CES 2026.",
		],
	},
	{
		id: "awards-scholarships",
		section: "Awards",
		title: "Scholarships + National Recognition",
		meta: "Academic and impact-based honors",
		summary: "Recognized for academic excellence, innovation, and community impact.",
		details: [
			"Pete Conrad Scholar, International 2025 Conrad Challenge Power Pitch Award.",
			"Bryan Cameron Impact Scholar Finalist (2.5% acceptance).",
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
			"1st Place, Synopsys Science & Engineering Fair — Biomedical Engineering.",
			"2nd Place, California Science and Engineering Fair — Computational Systems: Medical.",
		],
	},
	{
		id: "awards-innovation-creative",
		section: "Awards",
		title: "Innovation + Creative Awards",
		meta: "State and national competitions",
		summary: "Honors spanning technical innovation and visual storytelling.",
		details: [
			"State Winner, Samsung Solve for Tomorrow — won $12k in Samsung tech for school.",
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
											className="group cursor-pointer rounded-2xl border border-white/15 bg-white/5 backdrop-blur-lg px-4 py-4 transition-all duration-200 hover:bg-white/10 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
										>
											<p className="body text-slate-100 text-base">{item.title}</p>
											<p className="body text-slate-400 pt-1">{item.meta}</p>
											<p className="body text-slate-300 pt-3 leading-relaxed">{item.summary}</p>
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
