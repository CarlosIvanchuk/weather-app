export interface IBackgroundRecord {
	[key: string]: Background;
}

export interface Background {
	day: string;
	sunset: string;
	night: string;
}

export const BACKGROUNDS_BY_PLACE: IBackgroundRecord = {
	china: {
		day: 'china-day.png',
		sunset: 'china-sunset.png',
		night: 'china-night.png'
	},
	city: {
		day: 'city-day.png',
		sunset: 'city-sunset.png',
		night: 'city-night.png'
	},
	desert: {
		day: 'desert-day.png',
		sunset: 'desert-sunset.png',
		night: 'desert-night.png'
	},
	egypt: {
		day: 'egypt-day.png',
		sunset: 'egypt-sunset.png',
		night: 'egypt-night.png'
	},
	forest: {
		day: 'forest-day.png',
		sunset: 'forest-sunset.png',
		night: 'forest-night.png'
	},
	france: {
		day: 'france-day.png',
		sunset: 'france-sunset.png',
		night: 'france-night.png'
	},
	hillAndMountains: {
		day: 'hills-and-mountains-day.png',
		sunset: 'hills-and-mountains-sunset.png',
		night: 'hills-and-mountains-night.png'
	},
	india: {
		day: 'india-day.png',
		sunset: 'india-sunset.png',
		night: 'india-night.png'
	},
	indonesia: {
		day: 'indonesia-day.png',
		sunset: 'indonesia-sunset.png',
		night: 'indonesia-night.png'
	},
	italy: {
		day: 'italy-day.png',
		sunset: 'italy-sunset.png',
		night: 'italy-night.png'
	},
	itsukishimaGateJapan: {
		day: 'itsukishima-gate-japan-day.png',
		sunset: 'itsukishima-gate-japan-sunset.png',
		night: 'itsukishima-gate-japan-night.png'
	},
	japanMtFuji: {
		day: 'japan-mt-fuji-day.png',
		sunset: 'japan-mt-fuji-sunset.png',
		night: 'japan-mt-fuji-night.png'
	},
	lake: {
		day: 'lake-day.png',
		sunset: 'lake-sunset.png',
		night: 'lake-night.png'
	},
	london: {
		day: 'london-day.png',
		sunset: 'london-sunset.png',
		night: 'london-night.png'
	},
	philippines: {
		day: 'philippines-day.png',
		sunset: 'philippines-sunset.png',
		night: 'philippines-night.png'
	},
	seaTheLighthouse: {
		day: 'sea-the-lighthouse-day.png',
		sunset: 'sea-the-lighthouse-sunset.png',
		night: 'sea-the-lighthouse-night.png'
	},
	seaTheShip: {
		day: 'sea-the-ship-day.png',
		sunset: 'sea-the-ship-sunset.png',
		night: 'sea-the-ship-night.png'
	},
	snow: {
		day: 'snow-background-day.png',
		sunset: 'snow-background-sunset.png',
		night: 'snow-background-night.png'
	},
	street: {
		day: 'street-day.png',
		sunset: 'street-sunset.png',
		night: 'street-night.png'
	},
	tropical: {
		day: 'tropical-day.png',
		sunset: 'tropical-sunset.png',
		night: 'tropical-night.png'
	},
	usa: {
		day: 'usa-day.png',
		sunset: 'usa-sunset.png',
		night: 'usa-night.png'
	},
	valley: {
		day: 'valley-day.png',
		sunset: 'valley-sunset.png',
		night: 'valley-night.png'
	}
};

export const BACKGROUNDS_BY_TIME = {
	day: {
		china: 'china-day.png',
		city: 'city-day.png',
		desert: 'desert-day.png',
		egypt: 'egypt-day.png',
		forest: 'forest-day.png',
		france: 'france-day.png',
		hillAndMountains: 'hills-and-mountains-day.png',
		india: 'india-day.png',
		indonesia: 'indonesia-day.png',
		italy: 'italy-day.png',
		itsukishimaGateJapan: 'itsukishima-gate-japan-day.png',
		japanMtFuji: 'japan-mt-fuji-day.png',
		lake: 'lake-day.png',
		london: 'london-day.png',
		philippines: 'philippines-day.png',
		seaTheLighthouse: 'sea-the-lighthouse-day.png',
		seaTheShip: 'sea-the-ship-day.png',
		snow: 'snow-background-day.png',
		street: 'street-day.png',
		tropical: 'tropical-day.png',
		usa: 'usa-day.png',
		valley: 'valley-day.png'
	},
	sunset: {
		china: 'china-sunset.png',
		city: 'city-sunset.png',
		desert: 'desert-sunset.png',
		egypt: 'egypt-sunset.png',
		forest: 'forest-sunset.png',
		france: 'france-sunset.png',
		hillAndMountains: 'hills-and-mountains-sunset.png',
		india: 'india-sunset.png',
		indonesia: 'indonesia-sunset.png',
		italy: 'italy-sunset.png',
		itsukishimaGateJapan: 'itsukishima-gate-japan-sunset.png',
		japanMtFuji: 'japan-mt-fuji-sunset.png',
		lake: 'lake-sunset.png',
		london: 'london-sunset.png',
		philippines: 'philippines-sunset.png',
		seaTheLighthouse: 'sea-the-lighthouse-sunset.png',
		seaTheShip: 'sea-the-ship-sunset.png',
		snow: 'snow-background-sunset.png',
		street: 'street-sunset.png',
		tropical: 'tropical-sunset.png',
		usa: 'usa-sunset.png',
		valley: 'valley-sunset.png'
	},
	night: {
		china: 'china-night.png',
		city: 'city-night.png',
		desert: 'desert-night.png',
		egypt: 'egypt-night.png',
		forest: 'forest-night.png',
		france: 'france-night.png',
		hillAndMountains: 'hills-and-mountains-night.png',
		india: 'india-night.png',
		indonesia: 'indonesia-night.png',
		italy: 'italy-night.png',
		itsukishimaGateJapan: 'itsukishima-gate-japan-night.png',
		japanMtFuji: 'japan-mt-fuji-night.png',
		lake: 'lake-night.png',
		london: 'london-night.png',
		philippines: 'philippines-night.png',
		seaTheLighthouse: 'sea-the-lighthouse-night.png',
		seaTheShip: 'sea-the-ship-night.png',
		snow: 'snow-background-night.png',
		street: 'street-night.png',
		tropical: 'tropical-night.png',
		usa: 'usa-night.png',
		valley: 'valley-night.png'
	}
};
