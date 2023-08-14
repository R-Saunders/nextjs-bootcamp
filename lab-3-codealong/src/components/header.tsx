import Link from "next/link";

export default function Header() {
	return (
		<header className="flex justify-around w-100 p-4">
			{" "}
			<h2 className="text-3xl">Rich&#39;s Website</h2>
			<nav className="flex gap-4 items-center">
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/pets">Pets</Link>
			</nav>
		</header>
	);
}
