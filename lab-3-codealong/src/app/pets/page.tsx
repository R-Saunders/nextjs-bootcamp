import Link from "next/link";

export default function Pets() {
	return (
		<main className="flex min-h-screen flex-col items-center gap-4 p-24">
			<h1 className="text-5xl">My Pet&#39;s</h1>
			<Link href="/pets/nova">Nova - Border Collie</Link>
		</main>
	);
}
