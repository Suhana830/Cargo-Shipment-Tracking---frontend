import React from 'react'
import { useNavigate } from 'react-router-dom';

function AddShipment() {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center'>
            <button className="bg-orange-400 font-extrabold text-white p-2 rounded-md mt-2" onClick={() => navigate('/newshipment')}>Add new Shipment</button>
        </div>
    )
}

export default AddShipment