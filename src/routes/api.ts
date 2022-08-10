import type { RequestEvent } from "@sveltejs/kit";

export async function GET(event: RequestEvent) {
	const headers = event.request.headers;

	if (headers.has('Authorization') === false) {
		return {
			status: 401
		}
	}

	const bearer = headers.get('Authorization');

	// verify bearer token

	// make secure API calls

	return {
		body: {
			name: 'rpf3'
		}
	};
}
