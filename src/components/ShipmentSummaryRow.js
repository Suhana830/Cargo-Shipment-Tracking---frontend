import React from "react";
import moment from "moment";

const ShipmentSummaryRow = ({ shipment }) => {
    if (!shipment) return null;

    return (
        <div className="w-full bg-white p-4 rounded-md shadow-md flex flex-wrap items-center justify-between gap-4 text-sm text-gray-800 font-medium">
            <div><span className="text-gray-500">Container ID:</span> {shipment.containerId}</div>
            <div><span className="text-gray-500">ETA:</span> {moment(shipment.currentETA).format("DD MMM YYYY, h:mm A")}</div>
            <div><span className="text-gray-500">Source:</span> {shipment.currentLocation}</div>
            <div><span className="text-gray-500">Destination:</span> {shipment.deliveredAt}</div>
        </div>
    );
};

export default ShipmentSummaryRow;