export interface IBackgroundRecord {
	[key: string]: Background;
}

export interface Background {
	day: string;
	sunset: string;
	night: string;
}

export const BACKGROUNDS: IBackgroundRecord = {
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
