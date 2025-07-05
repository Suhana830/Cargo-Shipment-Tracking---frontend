import React from 'react';
import MapboxRouteMap from '../components/MapboxRouteMap';


const DisplayDetail = ({ item }) => {
    if (!item) return <div className="text-center p-6">No data available</div>;

    const {

        _id,
        containerId,
        currentETA,
        currentLocation,
        deliveredAt,
        destination_corr,
        route,
        source_corr,
        status,
    } = item;

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6 bg-gray-100">
            {/* Header */}
            <div className="bg-orange-500 text-white p-4 rounded text-center text-2xl font-bold">
                Shipment Details
            </div>

            {/* Shipment Info */}
            <div className="bg-white rounded shadow p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-gray-800">
                <div>
                    <div className="text-sm text-gray-500">Shipment ID</div>
                    <div className="font-semibold">{_id}</div>
                </div>
                <div>
                    <div className="text-sm text-gray-500">Container ID</div>
                    <div className="font-semibold">{containerId}</div>
                </div>
                <div>
                    <div className="text-sm text-gray-500">Current Location</div>
                    <div className="font-semibold">{currentLocation}</div>
                </div>
                <div>
                    <div className="text-sm text-gray-500">ETA</div>
                    <div className="font-semibold">
                        {currentETA ? new Date(currentETA).toLocaleString() : 'N/A'}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-500">Status</div>
                    <div className="font-semibold">{status}</div>
                </div>
                <div>
                    <div className="text-sm text-gray-500">Delivered At</div>
                    <div className="font-semibold">{deliveredAt}</div>
                </div>
                <div>
                    <div className="text-sm text-gray-500">Source Coordinates</div>
                    <div className="font-semibold">
                        {source_corr?.lat}, {source_corr?.lon}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-500">Destination Coordinates</div>
                    <div className="font-semibold">
                        {destination_corr?.lat}, {destination_corr?.lon}
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-4">
                    <div className="text-sm text-gray-500">Route</div>
                    <div className="font-semibold">{route?.join(' → ')}</div>
                </div>
            </div>

            {/* Map */}
            <MapboxRouteMap route={route} currentLocation={currentLocation} />
        </div>
    );
};

export default DisplayDetail;
