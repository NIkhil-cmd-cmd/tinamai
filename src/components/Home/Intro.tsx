import Image from "next/image";
import ScrambleText from "../Global/ScrambleText";

const Intro = () => {
	return (
		<div className="flex flex-col-reverse sm:flex-row gap-6 sm:gap-8 items-start max-w-5xl">
			<div className="space-y-6 flex-1">
				<h1 className="font-serif2 text-3xl sm:text-5xl leading-tight">hi, i&apos;m nikhil.</h1>
				<ScrambleText
					text="incoming freshman at Stanford, building wearable neurotechnology at the intersection of bioengineering, hardware, and machine learning."
					settings={{ speed: 0.5 }}
					className="text-base sm:text-lg"
					replayOn={false}
				/>
			</div>
			<div className="sm:flex-shrink-0 inline-block overflow-hidden rounded-sm">
				<Image
					src="/profile.jpg"
					alt="Nikhil Krishnaswamy"
					height={280}
					width={210}
					quality={90}
					priority
					itemProp="image"
					className="rounded-sm transition-transform duration-300 hover:scale-[1.03]"
				/>
			</div>
		</div>
	);
};

export default Intro;
