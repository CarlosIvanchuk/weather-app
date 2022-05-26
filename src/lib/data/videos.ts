export interface IVideoRecord {
	[key: string]: Video;
}

export interface Video {
	day: string;
	sunset: string;
	night: string;
}

export const VIDEOS_BY_PLACE: IVideoRecord = {
	china: {
		day: 'China-day.mp4',
		sunset: 'China-sunset.mp4',
		night: 'China-night-s.mp4'
	},
	city: {
		day: 'City-day.mp4',
		sunset: 'City-sunset-9.mp4',
		night: 'City-night-c.mp4'
	},
	desert: {
		day: 'Snow/Desert-day-T.mp4',
		sunset: 'Snow/Desert-sunset-B.mp4',
		night: 'Snow/Desert-night-6.mp4'
	},
	egypt: {
		day: 'Egypt-day-D.mp4',
		sunset: 'Egypt-sunset-n.mp4',
		night: 'Egypt-night-0.mp4'
	},
	forest: {
		day: 'Forest-day-Q.mp4',
		sunset: 'Forest-sunset-4.mp4',
		night: 'Forest-night-A.mp4'
	},
	france: {
		day: 'France-day.mp4',
		sunset: 'France-sunset-i.mp4',
		night: 'France-night-4.mp4'
	},
	hillsAndMountains: {
		day: 'HillsandMountains-day.mp4',
		sunset: 'HillsandMountains-sunset.mp4',
		night: 'HillsandMountains-night.mp4'
	},
	india: {
		day: 'India-day.mp4',
		sunset: 'India-sunset.mp4',
		night: 'India-night.mp4'
	},
	indonesia: {
		day: 'Indonesia-day-l.mp4',
		sunset: 'Indonesia-sunset-j.mp4',
		night: 'Indonesia-night.mp4'
	},
	italy: {
		day: 'Italy-day.mp4',
		sunset: 'Italy-sunset-r.mp4',
		night: 'Italy-night.mp4'
	},
	itsukishimaGateJapan: {
		day: 'ItsukishimaGateJapan-day.mp4',
		sunset: 'ItsukishimaGateJapan-sunset.mp4',
		night: 'ItsukishimaGateJapan-night.mp4'
	},
	japanMtFuji: {
		day: 'Mt.FujiJapan-day.mp4',
		sunset: 'Mt.FujiJapan-sunset.mp4',
		night: 'Mt.FujiJapan-night.mp4'
	},
	lake: {
		day: 'Lake-day-J.mp4',
		sunset: 'Lake-sunset-L.mp4',
		night: 'Lake-night-N.mp4'
	},
	london: {
		day: 'London-day.mp4',
		sunset: 'London-sunset.mp4',
		night: 'London-night.mp4'
	},
	philippines: {
		day: 'Philippines-day.mp4',
		sunset: 'Philippines-sunset.mp4',
		night: 'Philippines-night.mp4'
	},
	seaTheLighthouse: {
		day: 'SeaLighthouse-day.mp4',
		sunset: 'SeaLighthouse-sunset.mp4',
		night: 'SeaLighthouse-night.mp4'
	},
	seaTheShip: {
		day: 'SeaShip-day.mp4',
		sunset: 'SeaShip-sunset.mp4',
		night: 'SeaShip-night.mp4'
	},
	snow: {
		day: 'snow-day.mp4',
		sunset: 'snow-sunset-2.mp4',
		night: 'snow-night.mp4'
	},
	street: {
		day: 'Street-day-X.mp4',
		sunset: 'Street-sunset-z.mp4',
		night: 'Street-night.mp4'
	},
	tropical: {
		day: 'Tropical-day.mp4',
		sunset: 'Tropical-sunset.mp4',
		night: 'Tropical-night.mp4'
	},
	usa: {
		day: 'USA-day.mp4',
		sunset: 'USA-sunset-L.mp4',
		night: 'USA-night.mp4'
	},
	valley: {
		day: 'Valley-day-H.mp4',
		sunset: 'Valley-sunset.mp4',
		night: 'Valley-night-B.mp4'
	}
};

export const VIDEOS_BY_TIME = {
	day: {
		china: 'China-day.mp4',
		city: 'City-day.mp4',
		desert: 'Snow/Desert-day-T.mp4',
		egypt: 'Egypt-day-D.mp4',
		forest: 'Forest-day-Q.mp4',
		france: 'France-day.mp4',
		hillsAndMountains: 'HillsandMountains-day.mp4',
		india: 'India-day.mp4',
		indonesia: 'Indonesia-day-l.mp4',
		italy: 'Italy-day.mp4',
		itsukishimaGateJapan: 'ItsukishimaGateJapan-day.mp4',
		japanMtFuji: 'Lake-day-J.mp4',
		lake: 'London-day.mp4',
		london: 'Mt.FujiJapan-day.mp4',
		philippines: 'Philippines-day.mp4',
		seaTheLighthouse: 'SeaLighthouse-day.mp4',
		seaTheShip: 'SeaShip-day.mp4',
		snow: 'snow-day.mp4',
		street: 'Street-day-X.mp4',
		tropical: 'Tropical-day.mp4',
		usa: 'USA-day.mp4',
		valley: 'Valley-day-H.mp4'
	},
	sunset: {
		china: 'China-sunset.mp4',
		city: 'City-sunset-9.mp4',
		desert: 'Snow/Desert-sunset-B.mp4',
		egypt: 'Egypt-sunset-n.mp4',
		forest: 'Forest-sunset-4.mp4',
		france: 'France-sunset-i.mp4',
		hillsAndMountains: 'HillsandMountains-sunset.mp4',
		india: 'India-sunset.mp4',
		indonesia: 'Indonesia-sunset-j.mp4',
		italy: 'Italy-sunset-r.mp4',
		itsukishimaGateJapan: 'ItsukishimaGateJapan-sunset.mp4',
		japanMtFuji: 'Lake-sunset-L.mp4',
		lake: 'London-sunset.mp4',
		london: 'Mt.FujiJapan-sunset.mp4',
		philippines: 'Philippines-sunset.mp4',
		seaTheLighthouse: 'SeaLighthouse-sunset.mp4',
		seaTheShip: 'SeaShip-sunset.mp4',
		snow: 'snow-sunset-2.mp4',
		street: 'Street-sunset-z.mp4',
		tropical: 'Tropical-sunset.mp4',
		usa: 'USA-sunset-L.mp4',
		valley: 'Valley-sunset.mp4'
	},
	night: {
		china: 'China-night-s.mp4',
		city: 'City-night-c.mp4',
		desert: 'Snow/Desert-night-6.mp4',
		egypt: 'Egypt-night-0.mp4',
		forest: 'Forest-night-A.mp4',
		france: 'France-night-4.mp4',
		hillsAndMountains: 'HillsandMountains-night.mp4',
		india: 'India-night.mp4',
		indonesia: 'Indonesia-night.mp4',
		italy: 'Italy-night.mp4',
		itsukishimaGateJapan: 'ItsukishimaGateJapan-night.mp4',
		japanMtFuji: 'Lake-night-N.mp4',
		lake: 'London-night.mp4',
		london: 'Mt.FujiJapan-night.mp4',
		philippines: 'Philippines-night.mp4',
		seaTheLighthouse: 'SeaLighthouse-night.mp4',
		seaTheShip: 'SeaShip-night.mp4',
		snow: 'snow-night.mp4',
		street: 'Street-night.mp4',
		tropical: 'Tropical-night.mp4',
		usa: 'USA-night.mp4',
		valley: 'Valley-night-B.mp4'
	}
};
