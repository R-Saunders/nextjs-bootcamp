import { kv } from "@vercel/kv";

export async function GET() {
	// <string> between the method and the invocation tells the function what it will return
	const message = await kv.get<string>("message");
	return new Response(JSON.stringify(message));
}

export async function POST() {
	return new Response("This is a POST method in my new route at /api/message");
}
