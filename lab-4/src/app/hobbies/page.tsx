import Link from "next/link";

type HobbieSearchQuery = {
	sortBy: string;
};

type Hobbie = {
	name: string;
	slug: string;
};

const hobbies: Hobbie[] = [
	{ name: "Table Top Gaming", slug: "table-top-gaming" },
	{ name: "PC Gaming", slug: "pc-gaming" },
	{ name: "Hiking", slug: "hiking" },
];

function compareHobbies(a: Hobbie, b: Hobbie) {
	if (a.name < b.name) {
		return -1;
	} else if (a.name > b.name) {
		return 1;
	} else {
		return 0;
	}
}

export default function Hobbies({
	searchParams,
}: {
	searchParams: HobbieSearchQuery;
}) {
	if (searchParams.sortBy === "asc") {
		hobbies.sort(compareHobbies);
	} else if (searchParams.sortBy === "desc") {
		hobbies.sort(compareHobbies).reverse();
	}

	return (
		<main>
			<h1>My Hobbies!</h1>
			<div className="flex gap-4">
				<Link href="/hobbies">Clear Sort</Link>
				<Link href="/hobbies?sortBy=asc">Sort by ascending</Link>
				<Link href="/hobbies?sortBy=desc">Sort by descending</Link>
			</div>
			<p>I have a number of hobbies including:</p>
			<ul>
				{hobbies.map((hobbie) => {
					return (
						<li key={hobbie.slug}>
							<Link href={`/hobbies/${hobbie.slug}`}>{hobbie.name}</Link>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
