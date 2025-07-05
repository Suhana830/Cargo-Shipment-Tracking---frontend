import React, { useState } from 'react'
import { getShippingDetail } from '../stores/getShippingDetail';

function FilterArea() {

    const [searchFields, setSearchFields] = useState({
        containerId: '',
        shipmentId: '',
        currentLocation: '',
        deliveredAt: '',
        status: '',
        sortBy: '',
    });

    let { applyFilter, clearFilter } = getShippingDetail();

    const filterApply = (e) => {
        e.preventDefault();
        applyFilter(searchFields);
    }

    const filterClear = (e) => {
        e.preventDefault();
        clearFilter();
        setSearchFields({
            containerId: '',
            shipmentId: '',
            currentLocation: '',
            deliveredAt: '',
            status: '',
            sortBy: '',
        });
    }


    return (
        <div className="flex flex-col items-center p-4">
            {/* FILTER CONTROLS */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl mb-6">
                <input
                    type="text"
                    name="shipmentId"
                    value={searchFields.shipmentId}
                    onChange={(e) =>
                        setSearchFields({ ...searchFields, [e.target.name]: e.target.value })
                    }
                    placeholder="Search Shipment ID"
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="containerId"
                    value={searchFields.containerId}
                    onChange={(e) =>
                        setSearchFields({ ...searchFields, [e.target.name]: e.target.value })
                    }
                    placeholder="Search Container ID"
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="currentLocation"
                    value={searchFields.currentLocation}
                    onChange={(e) =>
                        setSearchFields({ ...searchFields, [e.target.name]: e.target.value })
                    }
                    placeholder="Search Current Location"
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="deliveredAt"
                    value={searchFields.deliveredAt}
                    onChange={(e) =>
                        setSearchFields({ ...searchFields, [e.target.name]: e.target.value })
                    }
                    placeholder="Search Delivered At"
                    className="border p-2 rounded"
                />

                <select
                    name="status"
                    value={searchFields.status}
                    onChange={(e) =>
                        setSearchFields({ ...searchFields, [e.target.name]: e.target.value })
                    }
                    className="border p-2 rounded"
                >
                    <option value="">All Status</option>
                    <option value="In Transit">In Transit</option>
                    <option value="Delivered">Delivered</option>
                </select>

                <select
                    name="sortBy"
                    value={searchFields.sortBy}
                    onChange={(e) =>
                        setSearchFields({ ...searchFields, [e.target.name]: e.target.value })
                    }
                    className="border p-2 rounded"
                >
                    <option value="">Sort By ETA</option>
                    <option value="etaAsc">Ascending</option>
                    <option value="etaDesc">Descending</option>
                </select>

                <button
                    onClick={filterApply}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Apply Filter
                </button>

                <button
                    onClick={filterClear}
                    className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                    Clear Filter
                </button>
            </div>
        </div>
    )
}

export default FilterArea