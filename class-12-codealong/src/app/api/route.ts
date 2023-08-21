// Will return the message at localhost:3000/api
export async function GET() {
	return new Response("Hey, welcome to my API");
}

// Will return an error at localhost:3000/api because browsers only do GET. Can be tested in thunder client to return the string below
export async function POST() {
	return new Response("This is my post route");
}
