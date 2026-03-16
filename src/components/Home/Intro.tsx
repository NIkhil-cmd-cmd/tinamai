import Image from "next/image";
import ScrambleText from "../Global/ScrambleText";

const Intro = () => {
	return (
		<div className="space-y-6 max-w-4xl">
			<h1 className="font-serif2 text-3xl sm:text-5xl leading-tight">hi, i&apos;m nikhil k.</h1>
			<ScrambleText
				text="incoming freshman at Stanford, building wearable neurotechnology at the intersection of bioengineering, hardware, and machine learning."
				settings={{ speed: 0.5 }}
				className="text-base sm:text-lg max-w-3xl"
				replayOn={false}
			/>
			<div className="pt-2">
				<Image src="/profile.jpg" alt="Nikhil Krishnaswamy" height={300} width={225} quality={90} priority itemProp="image" className="rounded-sm" />
			</div>
		</div>
	);
};

export default Intro;
