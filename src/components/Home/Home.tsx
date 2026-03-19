"use client";

import { useEffect, useMemo, useState } from "react";
import Intro from "./Intro";
import Image from "next/image";
import ScrambleText from "../Global/ScrambleText";
import Link from "../Global/Link";

type MediaItem = {
	src: string;
	alt: string;
	tile?: "hero" | "wide" | "tall" | "square";
};

type PortfolioItem = {
	id: string;
	section: "Research" | "Internships" | "Awards";
	title: string;
	meta: string;
	summary: string;
	details: string[];
	media?: MediaItem[];
};

type AwardEntry = {
	title: string;
	year: string;
	href?: string;
};

const awardEntries: AwardEntry[] = [
	{
		title: "Bryan Cameron Impact Scholar Finalist",
		year: "2026",
		href: "https://www.bryancameroneducationfoundation.org/scholars/finalists#:~:text=Kessenger%0ABeatrice%20Kim-,Nikhil%20Krishnaswamy,-Ally%20Krysalka%0AKris",
	},
	{
		title: "Coca-Cola Scholar Semifinalist",
		year: "2026",
		href: "https://www.coca-colascholarsfoundation.org/2026-semifinalists/#:~:text=Nikhil,CA",
	},
	{ title: "Presented @ IEEE BSN", year: "2025" },
	{ title: "Won ‘Best Poster’ @ MIT URTC", year: "2025" },
	{
		title: "1st Place School Photographers of America",
		year: "2023",
		href: "https://www.schoolphotographersofamerica.com/post/winners-of-the-fall-2023-sony-spoa-student-photo-contest-announced",
	},
	{ title: "State Winner, Samsung Solve for Tomorrow", year: "2025" },
	{ title: "Pete Conrad Challenge Power Pitch Award", year: "2025" },
	{ title: "2nd @ CSEF", year: "2025" },
];

const portfolioItems: PortfolioItem[] = [
	{
		id: "research-tvb",
		section: "Research",
		title: "Seizure Suppression Research (The Virtual Brain)",
		meta: "Computational Neuroscience",
		media: [
			{ src: "/media/tvb1.png", alt: "TVB research visualization", tile: "hero" },
			{ src: "/media/tvb2.mov", alt: "Brain activity simulation playback", tile: "tall" },
			{ src: "/media/tvb3.png", alt: "TVB model output map", tile: "wide" },
		],
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
		media: [
			{ src: "/media/tvb2.mov", alt: "NeuroPoD prototype clip", tile: "hero" },
			{ src: "/media/tvb1.png", alt: "EEG signal dashboard", tile: "square" },
			{ src: "/media/tvb3.png", alt: "Signal processing visualization", tile: "tall" },
		],
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
		media: [
			{ src: "/media/shareon1.png", alt: "Share-On app home screen", tile: "hero" },
			{ src: "/media/shareon2.MP4", alt: "Share-On app walkthrough", tile: "tall" },
			{ src: "/media/shareon1.png", alt: "Share-On collaboration flow", tile: "wide" },
		],
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
		media: [
			{ src: "/media/shareon1.png", alt: "Prospector mobile feed", tile: "hero" },
			{ src: "/media/shareon2.MP4", alt: "Prospector interaction demo", tile: "tall" },
			{ src: "/media/tvb3.png", alt: "Recommendation ranking visualization", tile: "wide" },
		],
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
		media: [
			{ src: "/media/simr1.png", alt: "fNIRS board and setup", tile: "hero" },
			{ src: "/media/simr2.png", alt: "SIMR hardware bench", tile: "square" },
			{ src: "/media/simr0.mov", alt: "fNIRS testing sequence", tile: "tall" },
		],
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
		media: [
			{ src: "/media/simr2.png", alt: "Healthify dashboard", tile: "hero" },
			{ src: "/media/shareon2.MP4", alt: "On-device AI workflow demo", tile: "tall" },
			{ src: "/media/shareon1.png", alt: "Mobile inference UI", tile: "wide" },
		],
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
		media: [
			{ src: "/media/simr0.mov", alt: "SIP stimulation setup", tile: "hero" },
			{ src: "/media/solo1.mov", alt: "Speech stimulation trial clip", tile: "tall" },
			{ src: "/media/simr1.png", alt: "SIP equipment close-up", tile: "wide" },
		],
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
		title: "Awards + Recognition",
		meta: "Academic, research, and innovation honors",
		summary: "Selected academic, research, and innovation awards.",
		details: [
			"Bryan Cameron Impact Scholar Finalist",
			"Coca-Cola Scholar Semifinalist",
			"Presented @ IEEE BSN",
			"Won ‘Best Poster’ @ MIT URTC",
			"1st Place School Photographers of America",
			"State Winner, Samsung Solve for Tomorrow",
			"Pete Conrad Challenge Power Pitch Award",
			"2nd @ CSEF",
		],
	},
];

export default function Home() {
	const colors = {
		text: "text-slate-100",
		textMuted: "text-slate-400",
		textMutedAlt: "text-slate-300",
		border: "border-white/10",
		borderBright: "border-white/30",
		panelBg: "bg-white/8",
		panelBorder: "border-white/20",
		accentBg: "bg-slate-900",
	};
	const [activeId, setActiveId] = useState<string | null>(null);
	const [visibleSection, setVisibleSection] = useState<PortfolioItem["section"]>("Research");
	const [introOpacity, setIntroOpacity] = useState(1);

	const sectionOrder = useMemo<Array<PortfolioItem["section"]>>(() => ["Research", "Internships", "Awards"], []);

	const groupedItems = useMemo(() => {
		return sectionOrder.map((section) => ({
			section,
			items: portfolioItems.filter((item) => item.section === section),
		}));
	}, [sectionOrder]);

	const visibleItems = groupedItems.find(({ section }) => section === visibleSection)?.items ?? [];
	const isAwardsSection = visibleSection === "Awards";
	const awardsList = isAwardsSection ? awardEntries : [];

	useEffect(() => {
		const stage = document.getElementById("portfolio-stage");
		if (!stage) return;

		const handleScroll = () => {
			const rect = stage.getBoundingClientRect();
			const fadeStart = window.innerHeight * 0.78;
			const fadeEnd = window.innerHeight * 0.24;
			const progress = (fadeStart - rect.top) / (fadeStart - fadeEnd);
			const clamped = Math.max(0, Math.min(1, progress));
			setIntroOpacity(1 - clamped);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	}, []);

	useEffect(() => {
		const sectionNodes = document.querySelectorAll<HTMLElement>("[data-portfolio-section]");
		if (sectionNodes.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					const target = entry.target as HTMLElement;
					const section = target.dataset.portfolioSection as PortfolioItem["section"] | undefined;
					if (!section) return;
					setVisibleSection(section);
				});
			},
			{ threshold: 0.6 }
		);

		sectionNodes.forEach((node) => observer.observe(node));

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (visibleItems.length === 0) {
			setActiveId(null);
			return;
		}

		if (!activeId || !visibleItems.some((item) => item.id === activeId)) {
			setActiveId(visibleItems[0].id);
		}
	}, [visibleItems, activeId]);

	const activeItem = portfolioItems.find((item) => item.id === activeId) ?? null;

	const getTileClassName = (tile?: MediaItem["tile"]) => {
		switch (tile) {
			case "hero":
				return "col-span-4 row-span-2";
			case "wide":
				return "col-span-4 row-span-1";
			case "tall":
				return "col-span-2 row-span-2";
			case "square":
			default:
				return "col-span-2 row-span-1";
		}
	};

	return (
		<main className="min-h-screen px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
			<div className="mx-auto w-full max-w-6xl space-y-10 relative">
				<div style={{ opacity: introOpacity }} className="transition-opacity duration-200 ease-out">
					<Intro />
				</div>

				<section id="portfolio-stage" className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:sticky lg:top-10 lg:min-h-[78vh]`}>
					<div className={isAwardsSection ? "lg:col-span-12 space-y-8" : "lg:col-span-4 space-y-8"}>
						<div className={`space-y-4 border-t ${colors.border} pt-5`}>
							<h2 className={`font-mono text-xs sm:text-sm ${colors.textMutedAlt} uppercase tracking-[0.2em]`}>/{visibleSection}</h2>
							{isAwardsSection ? (
								<ul className={`space-y-3 border-t ${colors.border} pt-4`}>
									{awardsList.map((award) => (
										<li key={award.title} className={`flex items-start justify-between gap-4 border-b ${colors.border} pb-3`}>
											{award.href ? (
												<Link
													text={award.title}
													href={award.href}
													className={`${colors.textMutedAlt} hover:text-slate-100`}
												/>
											) : (
												<p className={`body ${colors.textMutedAlt} text-base leading-relaxed`}>{award.title}</p>
											)}
											<span className={`font-mono text-xs uppercase tracking-[0.2em] ${colors.textMuted}`}>{award.year}</span>
										</li>
									))}
								</ul>
							) : (
								<ul className="space-y-2">
									{visibleItems.map((item, index) => (
										<li
											key={item.id}
											onMouseEnter={() => setActiveId(item.id)}
											onFocus={() => setActiveId(item.id)}
											tabIndex={0}
											className={`group cursor-pointer border-b ${colors.border} py-3 transition-all duration-200 ease-out hover:${colors.borderBright} hover:translate-x-[2px] focus:outline-none focus:ring-1 focus:ring-sky-400/40`}
										>
											<p className={`font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] mb-2 ${colors.textMuted}`}>
												{String(index + 1).padStart(2, "0")}
											</p>
											<ScrambleText
												text={item.summary}
												settings={{ speed: 1.6, tick: 1, step: 3.5, scramble: 4, chance: 1 }}
												className={`text-sm sm:text-base leading-relaxed transition-colors duration-200 ${
														activeId === item.id ? colors.text : colors.textMuted
												}`}
											/>
										</li>
									))}
								</ul>
							)}
						</div>
					</div>

					{!isAwardsSection && <div className="lg:col-span-8 lg:sticky lg:top-24">
							<div className={`rounded-lg border ${colors.panelBorder} ${colors.panelBg} p-5 sm:p-6 min-h-[420px] flex flex-col`}>
							{activeItem ? (
								<div className="space-y-4 flex flex-col h-full">
									<div>
											<p className={`font-mono ${colors.textMutedAlt} text-xs uppercase tracking-[0.2em]`}>/ Selection</p>
											<p className={`body ${colors.text} text-sm sm:text-base font-semibold uppercase tracking-wide pt-2`}>{activeItem.title}</p>
											<p className={`body ${colors.textMuted} text-xs pt-1 uppercase tracking-wider`}>{activeItem.meta}</p>
									</div>
									{activeItem.media && activeItem.media.length > 0 && (
										<div className="grid grid-cols-6 auto-rows-[86px] gap-2">
											{activeItem.media.map((asset) => {
												const isVideo = /\.(mp4|mov)$/i.test(asset.src);

												return (
													<div key={`${activeItem.id}-${asset.src}-${asset.alt}`} className={`rounded-md overflow-hidden border ${colors.panelBorder} ${colors.accentBg} flex items-center justify-center ${getTileClassName(asset.tile)}`}>
														{isVideo ? (
															<video
																src={asset.src}
																className="h-full w-full object-cover"
																muted
																loop
																autoPlay
																playsInline
																aria-label={asset.alt}
															/>
														) : (
															<Image src={asset.src} alt={asset.alt} width={420} height={280} className="h-full w-full object-cover" />
														)}
													</div>
												);
											})}
										</div>
									)}
											<div className={`border-t ${colors.border} pt-4 flex-1 overflow-y-auto`}>
										<ul className="space-y-3">
											{activeItem.details.map((line) => (
													<li key={line} className={`body ${colors.textMutedAlt} text-sm leading-relaxed`}>
													{line}
												</li>
											))}
										</ul>
									</div>
								</div>
							) : (
								<div className="h-full min-h-[380px] flex items-center justify-center">
									<p className={`body ${colors.textMuted} text-center text-sm uppercase tracking-wider`}>select an item</p>
								</div>
							)}
						</div>
					</div>}
				</section>

				<div aria-hidden className="space-y-0">
					{sectionOrder.map((section) => (
						<div key={section} data-portfolio-section={section} className="h-[80vh]" />
					))}
				</div>
			</div>
		</main>
	);
}
