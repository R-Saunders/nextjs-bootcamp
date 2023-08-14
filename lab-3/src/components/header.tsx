import Link from "next/link";

export default function Header() {
	return (
		<header className="flex text-red-500 justify-around p-4 border-b-2 border-red-500 border-solid">
			<h2 className="text-3xl">R - Saunders</h2>
			<nav className="flex gap-4 items-center">
				<Link href="/">Home</Link>
				<Link href="/hobbies">Hobbies</Link>
				<Link href="/work">Work</Link>
			</nav>
		</header>
	);
}
