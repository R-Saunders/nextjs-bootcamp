type HobbiePageParam = {
	hobbie: string;
};

type TTG = {
	name: string;
};

const TTGS: TTG[] = [
	{ name: "Dungeons & Dragons" },
	{ name: "Agricola" },
	{ name: "Wingspan" },
	{ name: "Betrayal at Baldur's Gate" },
	{ name: "Azul" },
];

export default function HobbiePage({ params }: { params: HobbiePageParam }) {
	console.log(params);

	return (
		<main>
			<h1>Welcome to my page all about {params.hobbie}</h1>
		</main>
	);
}
