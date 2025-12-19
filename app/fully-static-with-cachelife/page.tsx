import { cacheLife } from "next/cache";
import { Suspense } from "react";


const getData = () => {
	return Math.random();
}

const InnerComponent = async () => {
	"use cache";
	cacheLife("seconds")
	const data = getData();
	return <p>Random number: {data}</p>
}

export default function Page() {
	return <Suspense>
		<InnerComponent />
	</Suspense>;
}