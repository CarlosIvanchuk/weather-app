let RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST;
let RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

if (process.env.NODE_ENV === 'production') {
	// For production
	RAPIDAPI_HOST = process.env.RAPIDAPI_HOST;
	RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
}

export { RAPIDAPI_HOST, RAPIDAPI_KEY };
