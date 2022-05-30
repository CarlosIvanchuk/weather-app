import type { RequestEvent } from '@sveltejs/kit';
import type { Location, Current } from '$lib/types';

import { RAPIDAPI_HOST, RAPIDAPI_KEY } from '$lib/data/env';

const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': RAPIDAPI_HOST,
		'X-RapidAPI-Key': RAPIDAPI_KEY
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
