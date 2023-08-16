import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>
				<Link href="/gallery">Images</Link>,{" "}
				<Link href="/funkyfont">Fonts</Link> & Scripts
			</h1>
		</main>
	);
}
