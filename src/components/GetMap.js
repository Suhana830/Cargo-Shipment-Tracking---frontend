import { useState } from 'react'
import { getShippingDetail } from '../stores/getShippingDetail';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function GetMap() {

  let [shipmentId, setShipmentId] = useState("");

  const { getShipmentById } = getShippingDetail();
  const navigate = useNavigate();



  const handleMap = async (e) => {
    e.preventDefault();

    const existingId = Cookies.get('shipmentId');

    if (existingId !== shipmentId) {
      // Set or update the cookie
      Cookies.set('shipmentId', shipmentId, { expires: 1 }); // Expires in 1 day
      console.log(`Cookie updated with shipmentId: ${shipmentId}`);
    } else {
      console.log(`Same shipmentId already in cookie: ${shipmentId}`);
    }

    getShipmentById({ id: shipmentId });

    navigate('/map');
  };



  return (


    <div>

      <form onSubmit={handleMap}>
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



            <button className='bg-orange-400 text-white font-bold p-2 w-full rounded-md' type='submit'>
              Get Map
            </button>


          </div>



        </div>
      </form>

    </div>

  )
}

export default GetMap