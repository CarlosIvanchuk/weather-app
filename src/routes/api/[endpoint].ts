import type { RequestEvent } from '@sveltejs/kit';
import type { Location, Current, Forecast } from '$lib/types';

import { RAPIDAPI_HOST, RAPIDAPI_KEY } from '$lib/data/env';

const ENDPOINTS = ['current', 'forecast'];

const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': RAPIDAPI_HOST,
		'X-RapidAPI-Key': RAPIDAPI_KEY
	}
};

async function getWeatherData({ endpoint, query, lang }) {
	const response = await fetch(
		`https://${RAPIDAPI_HOST}/${endpoint}.json?q=${query}&lang=${lang}`,
		FETCH_OPTIONS
	);
	return await response.json();
}

/** @type {import('./__types/[id]').RequestHandler} */
export async function get(event: RequestEvent) {
	const {
		clientAddress,
		params,
		url: { searchParams }
	} = event;
	const query = searchParams.get('q') ?? clientAddress;
	const lang = searchParams.get('lang') ?? 'es';
	const { endpoint } = params;

	if (!ENDPOINTS.includes(endpoint)) {
		return {
			status: 400,
			body: {
				ok: false,
				error: {
					code: 1005,
					message: 'API request url is invalid'
				}
			}
		};
	}

	try {
		const data = await getWeatherData({ endpoint, query, lang });

		if (data?.error) {
			return {
				status: 400,
				body: {
					ok: false,
					error: data.error
				}
			};
		}

		return {
			status: 200,
			body: {
				ok: true,
				data
			}
		};
	} catch (error) {
		return {
			status: 400,
			body: {
				ok: false,
				error: {
					code: 0,
					message: 'Request failed'
				}
			}
		};
	}
}
