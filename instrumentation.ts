import type { Instrumentation } from "next";

export function register() {
	console.log("register was called");
}

export const onRequestError: Instrumentation.onRequestError = async (
	error,
	errorRequest,
	_errorContext,
) => {
	console.log("I am onRequestError");
	await new Promise((resolve) => setTimeout(resolve, 100));
};
