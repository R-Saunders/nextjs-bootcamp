export default async function Home() {
	const res = await fetch("http://localhost:3000/api/message", {
		next: { revalidate: 2 },
	});
	const data = await res.json();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-3xl">Welcome to my API</h1>
			<p>My message is: {data}</p>
		</main>
	);
}
