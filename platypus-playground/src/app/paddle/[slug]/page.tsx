import { Paddle } from "@/paddle";

type PlatypusParams = {
	params: {
		slug: string;
	};
};

export function generateMetadata({ params }: PlatypusParams) {
	const plat = getPlat(params.slug);
	return {
		title: plat?.name + " the platypus",
		description: plat?.description, 
	};
}

function getPlat(slug: string) {
	return Paddle.find((plat) => plat.slug === slug);
}

export default function PlatypusPage({ params }: PlatypusParams) {
	const plat = getPlat(params.slug);
	return (
		<div>
			<h2>{plat?.name}</h2>
			<p>Age: {plat?.age}</p>
			<p>Age: {plat?.description}</p>
		</div>
	);
}
