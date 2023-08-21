export async function GET() {
	return new Response("This is a new route under /api/message");
}

export async function POST() {
	return new Response("This is a POST method in my new route at /api/message");
}
