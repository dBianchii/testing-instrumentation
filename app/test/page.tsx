import { Suspense } from "react";

const getData = async () => {
	"use cache";
	return Math.random();
}


const InnerComponent = async () => {
	const data = await getData();
	return <p>Data: {data}</p>;
}

export default function TestPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<InnerComponent />
		</Suspense>
	);
}
