import { Suspense } from "react";

const getData = async () => {
	"use cache: private";
	return Math.random();
}


const InnerComponent = async () => {

	return <div>
		<p>Data1: {await getData()}</p>
		<p>Data2: {await getData()}</p>
		<p>Data3: {await getData()}</p>
		<p>Data4: {await getData()}</p>
	</div>
}

export default function TestPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<InnerComponent />
		</Suspense>
	);
}
