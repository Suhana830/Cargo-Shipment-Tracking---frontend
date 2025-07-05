import React, { useState } from 'react'
import { getShippingDetail } from '../stores/getShippingDetail';

function UpdateLocation() {
  const [shipmentId, setShipmentId] = useState("");
  const [newLocation, setNewLocation] = useState("");

  const { result } = getShippingDetail(); // assumed hook or function
  const { updateCurrentLocation } = getShippingDetail();


  const handleLocation = (e) => {
    e.preventDefault();


    updateCurrentLocation({ id: shipmentId, newLocation: newLocation });

    setTimeout(() => {

      window.location.reload(); // Then reload
    }, 2000);


  }


  return (
    <div>
      {result ? (

        <div className='flex justify-center' >
          <div className='p-4 w-[90%] bg-white flex gap-2'>
            <input
              type="text"
              name="id"
              value={shipmentId}
              placeholder='Enter ShipmentId'
              onChange={(e) => setShipmentId(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />

            <input
              type="text"
              name="newLocation"
              value={newLocation}
              placeholder='New Current Location'
              onChange={(e) => setNewLocation(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />

            <button className='bg-orange-400 text-white font-bold p-2 w-full rounded-md' onClick={handleLocation}>
              Update Current Location
            </button>

          </div>



        </div>
      ) : (
        null
      )}
    </div>
  );
}

export default UpdateLocation;