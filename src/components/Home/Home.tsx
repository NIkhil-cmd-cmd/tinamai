import Intro from "./Intro";
import Link from "../Global/Link";
import Image from "next/image";

type PortfolioItem = {
	title: string;
	meta: string;
	image: string;
	details: string[];
};

const research: PortfolioItem[] = [
	{
		title: "Peter Tass Lab, Stanford",
		meta: "Jun 2023 – Present",
		image: "/profile.jpg",
		details: [
			"Independent research in EEG-based seizure detection and forecasting.",
			"Comparative analysis of supervised seizure prediction approaches.",
			"Neural mass modeling with The Virtual Brain for stimulation strategy testing.",
		],
	},
	{
		title: "IEEE Research Presentations",
		meta: "Body Sensor Networks + Neural Engineering",
		image: "/profile.jpg",
		details: [
			"Only high school presenter at IEEE Body Sensor Networks.",
			"Research accepted to IEEE Neural Engineering and IEEE BSN venues.",
			"Focus on translating computational findings toward clinical relevance.",
		],
	},
];

const internships: PortfolioItem[] = [
	{
		title: "Stanford Institutes of Medicinal Research",
		meta: "Bioengineering Intern | Jun – Aug 2025",
		image: "/profile.jpg",
		details: [
			"Selected as 1 of 20 interns from 1,800+ applicants.",
			"Designed a portable single-channel fNIRS device to track oxy/deoxyhemoglobin changes.",
			"Built custom PCB (78.88mm x 43.26mm) with dual photodiodes and 740/850nm LEDs.",
			"Optimized repeatedly to satisfy 100g weight and $50 cost constraints.",
			"Executed iterative prototyping with soldering, drop testing, and clinical wear trials.",
		],
	},
	{
		title: "Solo Technologies",
		meta: "Project Intern | Sep 2024 – Mar 2025",
		image: "/profile.jpg",
		details: [
			"Built an on-device iOS flagship product for cloud-free AI workflows.",
			"Worked under strict model-size, inference-time, and latency constraints.",
			"Presented work at CES 2026.",
		],
	},
];

const awards: PortfolioItem[] = [
	{
		title: "Scholarships + National Recognition",
		meta: "Academic and impact-based honors",
		image: "/profile.jpg",
		details: [
			"Pete Conrad Scholar, International 2025 Conrad Challenge Power Pitch Award.",
			"Bryan Cameron Impact Scholar Finalist (2.5% acceptance).",
			"Coca-Cola Scholar Semifinalist (1.2% applicant rate).",
		],
	},
	{
		title: "Research + Engineering Competitions",
		meta: "IEEE and science fair distinctions",
		image: "/profile.jpg",
		details: [
			"Best Poster at IEEE MIT Undergraduate Research Technology Conference.",
			"1st Place, Synopsys Science & Engineering Fair — Biomedical Engineering.",
			"2nd Place, California Science and Engineering Fair — Computational Systems: Medical.",
		],
	},
	{
		title: "Innovation + Creative Awards",
		meta: "State and national competitions",
		image: "/profile.jpg",
		details: [
			"State Winner, Samsung Solve for Tomorrow — won $12k in Samsung tech for school.",
			"1st Place, School Photographers of America Student Competition.",
		],
	},
];

function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
	return (
		<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{items.map((item) => (
				<li key={item.title} className="group relative overflow-hidden border border-slate-700 bg-slate-900/30" tabIndex={0}>
					<Image src={item.image} alt={item.title} width={900} height={550} className="h-56 w-full object-cover opacity-85 transition-transform duration-300 group-hover:scale-105" />
					<div className="absolute inset-0 bg-slate-950/20" />
					<div className="absolute bottom-0 left-0 right-0 p-4">
						<p className="body text-slate-100">{item.title}</p>
						<p className="body text-slate-300 pt-1">{item.meta}</p>
					</div>
					<div className="absolute inset-0 bg-slate-950/93 p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
						<p className="body text-slate-100 pb-2">{item.title}</p>
						<ul className="space-y-2">
							{item.details.map((line) => (
								<li key={line} className="body text-slate-300 leading-relaxed">
									• {line}
								</li>
							))}
						</ul>
					</div>
				</li>
			))}
		</ul>
	);
}

export default function Home() {
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
				<section className="space-y-12 border-t border-slate-800 pt-10">
					<div className="space-y-3">
						<h2 className="font-mono text-sm text-slate-300 uppercase tracking-wide">research</h2>
						<PortfolioGrid items={research} />
					</div>

					<div className="space-y-4 border-t border-slate-800 pt-8">
						<h2 className="font-mono text-sm text-slate-300 uppercase tracking-wide">internships</h2>
						<PortfolioGrid items={internships} />
					</div>

					<div className="space-y-3 border-t border-slate-800 pt-8">
						<h2 className="font-mono text-sm text-slate-300 uppercase tracking-wide">awards</h2>
						<PortfolioGrid items={awards} />
					</div>
				</section>
			</div>
		</main>
	);
}
