import Intro from "./Intro";
import Link from "../Global/Link";

const specifics = [
	{
		title: "Research",
		subtitle: "EEG + computational neuroscience",
		focus: "Seizure prediction and suppression strategies",
		onCard: [
			"Peter Tass Lab, Stanford (independent research)",
			"Comparative EEG seizure detection/prediction analysis",
			"Neural mass modeling using The Virtual Brain",
		],
		cardClass: "sm:col-span-2 sm:rotate-[-1deg]",
		details: [
			"Built a comparative framework for supervised seizure forecasting approaches.",
			"Studied how stimulation timing can alter seizure trajectories in model-based simulations.",
			"Presented this work at IEEE Body Sensor Networks as the only high school presenter.",
		],
	},
	{
		title: "Internships",
		subtitle: "Biomedical devices + on-device AI",
		focus: "From clinical needfinding to product constraints",
		onCard: [
			"Stanford Institutes of Medicinal Research (Bioengineering)",
			"Solo Technologies (On-device iOS AI)",
			"Wearable systems, latency, and usability constraints",
		],
		cardClass: "sm:col-span-1 sm:translate-y-4 sm:rotate-[1deg]",
		details: [
			"Selected 1/20 from 1,800+ applicants to build a portable fNIRS prototype under cost and weight targets.",
			"Iterated through PCB integration, stress/drop testing, and clinical wear trials.",
			"Built cloud-free iOS AI features and presented the product direction at CES 2026.",
		],
	},
	{
		title: "Awards",
		subtitle: "Science, engineering, and scholarship",
		focus: "Recognition across research, innovation, and impact",
		onCard: [
			"Pete Conrad Scholar",
			"Bryan Cameron Impact Scholar Finalist",
			"Coca-Cola Scholar Semifinalist",
		],
		cardClass: "sm:col-span-2 sm:-translate-y-2 sm:rotate-[0.5deg]",
		details: [
			"Accepted research to IEEE Neural Engineering and IEEE Body Sensor Networks.",
			"Best Poster at IEEE MIT Undergraduate Research Technology Conference.",
			"Top placements at Synopsys and California science and engineering fairs.",
		],
	},
];

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
				<section className="space-y-4">
					<h2 className="font-mono text-sm text-slate-300 uppercase tracking-wide">specifics</h2>
					<ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
						{specifics.map((item, index) => (
							<li key={item.title} className={`group relative border border-slate-700/80 bg-slate-900/40 px-4 py-4 hover:border-slate-300 transition-colors ${item.cardClass}`}>
								<div className="flex items-start justify-between gap-4">
									<div>
										<p className="body text-slate-400">{String(index + 1).padStart(2, "0")}</p>
										<p className="body pt-1 text-base text-slate-100">{item.title}</p>
										<p className="body pt-1 text-slate-400">{item.subtitle}</p>
										<p className="body pt-3 text-slate-300">{item.focus}</p>
										<ul className="pt-3 space-y-2">
											{item.onCard.map((line) => (
												<li key={line} className="body text-slate-300">
													• {line}
												</li>
											))}
										</ul>
									</div>
									<p className="body text-slate-400">hover for depth</p>
								</div>
								<div className="pointer-events-none absolute left-0 top-full z-20 mt-2 w-full rounded-sm border border-slate-500 bg-slate-950/95 p-4 opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100">
									<p className="body text-slate-200 pb-2">{item.title} — deeper details</p>
									<ul className="space-y-2">
										{item.details.map((line) => (
											<li key={line} className="body text-slate-300">
												• {line}
											</li>
										))}
									</ul>
								</div>
							</li>
						))}
					</ul>
				</section>
			</div>
		</main>
	);
}
