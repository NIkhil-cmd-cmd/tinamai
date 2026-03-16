import Image from "next/image";
import ScrambleText from "../Global/ScrambleText";
import Link from "../Global/Link";

const Intro = () => {
	return (
		<div className="space-y-6 max-w-4xl">
			<h1 className="font-mono text-4xl sm:text-6xl leading-tight">hi, i&apos;m nikhil k.</h1>
			<ScrambleText
				text="incoming freshman at Stanford, building wearable neurotechnology at the intersection of bioengineering, hardware, and machine learning."
				settings={{ speed: 0.5 }}
				className="text-base sm:text-lg max-w-3xl"
				replayOn={false}
			/>
			<div className="pt-2">
				<Image src="/profile.jpg" alt="Nikhil Krishnaswamy" height={300} width={225} quality={90} priority itemProp="image" className="rounded-sm" />
			</div>

			<div className="space-y-3 pt-2">
				<ScrambleText text="CONTACT + LINKS" settings={{ speed: 0.4 }} className="text-slate-300" replayOn={false} />
				<div className="body flex flex-wrap gap-x-3 gap-y-2">
					<Link text="email" href="mailto:krishnaswamynikhil@gmail.com" />
					<span className="text-slate-500">•</span>
					<Link text="phone" href="tel:+14085500924" />
					<span className="text-slate-500">•</span>
					<Link text="resume" href="/resume.pdf" />
					<span className="text-slate-500">•</span>
					<Link text="github" href="https://github.com/" />
					<span className="text-slate-500">•</span>
					<Link text="linkedin" href="https://linkedin.com/" />
					<span className="text-slate-500">•</span>
					<Link text="lists" href="/lists" />
				</div>
			</div>
		</div>
	);
};

export default Intro;
