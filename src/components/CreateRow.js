import React from 'react'

function CreateRow({ item }) {
    return (
        <div className="grid grid-cols-12 gap-4 bg-white hover:bg-gray-50 px-4 py-3 border-b text-sm">
            <div className="col-span-3 truncate">{item._id}</div>
            <div className="col-span-2">{item.containerId}</div>
            <div className="col-span-3 truncate">{item.route.join(' → ')}</div>
            <div className="col-span-1">{item.currentLocation}</div>
            <div className="col-span-1">{item.deliveredAt}</div>
            <div className="col-span-1">
                {item.currentETA ? new Date(item.currentETA).toLocaleDateString() : 'N/A'}
            </div>
            <div className="col-span-1 font-semibold text-center">
                <span className={item.status === 'Delivered' ? 'text-green-600' : 'text-yellow-600'}>
                    {item.status}
                </span>
            </div>
        </div>
    )
}

export default CreateRow