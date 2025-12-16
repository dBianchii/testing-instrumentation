export async function GET() {
	throw new Error("test error");
  return new Response("Hello, world!");
}