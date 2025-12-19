import { cacheLife } from "next/cache";

const getData = async () => {
	return Math.random();
}

export default async function Page() {
	"use cache";
	cacheLife("seconds")

	const data = await getData();
	return <div>
		<p>Random number: {data}</p>
	</div>;
}