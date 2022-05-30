import type { RequestEvent } from '@sveltejs/kit';
import type { Location, Current } from '$lib/types';

let RAPIAPI_HOST;
let RAPIAPI_KEY;

if (process.env.NODE_ENV === 'production') {
    // For production
    RAPIAPI_HOST = process.env.RAPIDAPI_HOST;
    RAPIAPI_KEY = process.env.RAPIDAPI_KEY;
} else {
    // For development
    RAPIAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST
    RAPIAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY
}

const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': RAPIAPI_HOST,
		'X-RapidAPI-Key': RAPIAPI_KEY
	}
};

/** @type {import('./__types/[id]').RequestHandler} */
export async function get(event: RequestEvent) {
	const { searchParams } = event.url;
	const { clientAddress } = event;
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
