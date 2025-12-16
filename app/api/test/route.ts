import { connection } from "next/server";

export async function GET() {
	await connection();
	throw new Error("test error");
  return new Response("Hello, world!");
}