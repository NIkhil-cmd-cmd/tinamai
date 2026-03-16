import Intro from "./Intro";
import Link from "../Global/Link";

const specifics = [
	{
		title: "Bioengineering Intern — Stanford Institutes of Medicinal Research",
		subtitle: "Jun – Aug 2025",
		cardClass: "sm:col-span-2 sm:rotate-[-1deg]",
		details:
			"Selected as 1 of 20 from 1,800+ applicants. Built a portable single-channel fNIRS device with custom PCB and iterated through soldering, drop testing, and clinical wear trials.",
	},
	{
		title: "Founder & Product Lead — Neuropod Technologies",
		subtitle: "Aug 2024 – Jun 2025",
		cardClass: "sm:col-span-1 sm:translate-y-4 sm:rotate-[1deg]",
		details:
			"Created a behind-the-ear EEG system with custom PCB, analog filtering, and ESP32 BLE transmission. Validated through wear and reliability testing with strong signal quality at lower cost.",
	},
	{
		title: "Project Intern — Solo Technologies",
		subtitle: "Sep 2024 – Mar 2025",
		cardClass: "sm:col-span-1 sm:-translate-y-1 sm:rotate-[-0.5deg]",
		details:
			"Built an on-device iOS flagship product under strict model-size and latency constraints for cloud-free AI. Presented at CES 2026.",
	},
	{
		title: "Co-founder & CTO — Share-On",
		subtitle: "Mar 2024 – Present",
		cardClass: "sm:col-span-2 sm:translate-y-2 sm:rotate-[0.75deg]",
		details:
			"Led product definition, architecture, and iOS implementation for a teen mental health platform that grew to 7,000+ users in three months.",
	},
	{
		title: "Independent Research — Peter Tass Lab, Stanford",
		subtitle: "Jun 2023 – Present",
		cardClass: "sm:col-span-1 sm:rotate-[-1deg]",
		details:
			"Published comparative analysis on EEG-based seizure prediction and presented as the only high school presenter at IEEE Body Sensor Networks.",
	},
	{
		title: "Education + Awards",
		subtitle: "Stanford incoming freshman",
		cardClass: "sm:col-span-2 sm:-translate-y-2 sm:rotate-[0.5deg]",
		details:
			"Intended focus in biomechanical engineering, computer science, and symbolic systems. Highlights include Pete Conrad Scholar, Bryan Cameron Impact Scholar Finalist, Coca-Cola Scholar Semifinalist, and IEEE conference acceptances.",
	},
];

export default function Home() {
	return (
		<main className="min-h-screen p-8 sm:p-14">
			<div className="mx-auto w-full max-w-5xl space-y-14 relative">
				<aside className="body sm:fixed sm:right-6 sm:top-10 sm:text-right space-y-2 z-30">
					<p className="text-slate-300">contact + links</p>
					<div className="flex sm:flex-col flex-wrap gap-x-3 gap-y-1 sm:items-end">
						<Link text="email" href="mailto:krishnaswamynikhil@gmail.com" />
						<Link text="phone" href="tel:+14085500924" />
						<Link text="resume" href="/resume.pdf" />
						<Link text="github" href="https://github.com/" />
						<Link text="linkedin" href="https://linkedin.com/" />
						<Link text="lists" href="/lists" />
					</div>
				</aside>
				<Intro />
				<section className="space-y-4">
					<h2 className="font-mono text-sm text-slate-300 uppercase tracking-wide">specifics</h2>
					<ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
						{specifics.map((item, index) => (
							<li key={item.title} className={`group relative border border-slate-700/80 bg-slate-900/40 px-4 py-4 hover:border-slate-300 transition-colors ${item.cardClass}`}>
								<div className="flex items-start justify-between gap-4">
									<div>
										<p className="body text-slate-400">{String(index + 1).padStart(2, "0")}</p>
										<p className="body pt-1">{item.title}</p>
										<p className="body pt-1 text-slate-400">{item.subtitle}</p>
									</div>
									<p className="body text-slate-400">hover for more</p>
								</div>
								<div className="pointer-events-none absolute left-0 top-full z-20 mt-2 w-full rounded-sm border border-slate-500 bg-slate-950/95 p-4 opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100">
									<p className="body text-slate-200">{item.details}</p>
								</div>
							</li>
						))}
					</ul>
				</section>
			</div>
		</main>
	);
}
