import React from 'react'
import DisplayAll from './DisplayAll'

function ShowTable() {
    return (
        <>
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 bg-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-t-md">
                <div className="col-span-3">Shipment ID</div>
                <div className="col-span-2">Container ID</div>
                <div className="col-span-3">Route</div>
                <div className="col-span-1">Source</div>
                <div className="col-span-1">Destination</div>
                <div className="col-span-1">ETA(MM-DD-YYYY)</div>
                <div className="col-span-1">Status</div>
            </div>

            {/* Data rows */}
            <DisplayAll />


        </>
    )
}

export default ShowTable