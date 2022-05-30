import type { RequestEvent } from '@sveltejs/kit';
import type { Location, Current } from '$lib/types';

const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': '71e59e906dmshfdc9ed284df2469p1b599cjsn0355f0f200d5'
	}
};

/** @type {import('./__types/[id]').RequestHandler} */
export async function get(event: RequestEvent) {
	const { searchParams } = event.url;
	const { clientAddress } = event;
	console.log(clientAddress)
	// const query = searchParams.get('q') ?? 'Tokyo';
	const query = searchParams.get('q') ?? clientAddress
	const lang = searchParams.get('lang') ?? 'es';

	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}&lang=${lang}&days=3`,
		FETCH_OPTIONS
	);

	const data = await response.json();

	const { location, current }: { location: Location; current: Current } = data;

	const body = {
		location,
		current
	};

	return {
		status: 200,
		body
	};
}
