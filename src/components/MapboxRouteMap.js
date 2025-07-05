import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { get_coordinates } from '../lib/get_coordinates';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MapboxRouteMap = ({ route, currentLocation }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        const loadMap = async () => {
            if (!route.length) return;

            const coordinates = await Promise.all(
                route.map(async (city) => {
                    try {
                        const { lat, lon } = await get_coordinates(city);
                        return { city, coord: [lon, lat] };
                    } catch (err) {
                        console.error(`Failed to get coordinates for ${city}`, err);
                        return null;
                    }
                })
            );

            const validCoords = coordinates.filter(Boolean);
            if (!validCoords.length) return;

            if (map.current) {
                map.current.remove(); // Remove existing map instance
            }

            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: validCoords[0].coord,
                zoom: 5,
            });

            map.current.on('load', () => {
                if (map.current.getSource('route')) {
                    map.current.removeLayer('route');
                    map.current.removeSource('route');
                }

                map.current.addSource('route', {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        geometry: {
                            type: 'LineString',
                            coordinates: validCoords.map(c => c.coord),
                        },
                    },
                });

                map.current.addLayer({
                    id: 'route',
                    type: 'line',
                    source: 'route',
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round',
                    },
                    paint: {
                        'line-color': '#3b82f6',
                        'line-width': 4,
                    },
                });

                validCoords.forEach(({ city, coord }, idx) => {
                    let color = 'blue';
                    if (city.toLowerCase() === currentLocation.toLowerCase()) {
                        color = 'yellow';
                    } else if (idx === 0) {
                        color = 'green';
                    } else if (idx === validCoords.length - 1) {
                        color = 'red';
                    }

                    new mapboxgl.Marker({ color })
                        .setLngLat(coord)
                        .setPopup(new mapboxgl.Popup().setText(city))
                        .addTo(map.current);
                });
            });
        };

        loadMap();

        return () => {
            if (map.current) {
                map.current.remove();
                map.current = null;
            }
        };
    }, [route, currentLocation]);

    return <div ref={mapContainer} className="w-full h-[500px] rounded-lg shadow-md" />;
};

export default MapboxRouteMap;
