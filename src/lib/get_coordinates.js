import axios from 'axios';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

export const get_coordinates = async (place) => {
    try {
        const res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(place)}.json`, {
            params: {
                access_token: MAPBOX_TOKEN,
                limit: 1,
            },
        });

        const coords = res.data.features[0]?.center;
        return { lon: coords[0], lat: coords[1] };
    } catch (err) {
        console.error(`Error fetching from Mapbox:`, err.message);
        return { lat: 0, lon: 0 };
    }
};
