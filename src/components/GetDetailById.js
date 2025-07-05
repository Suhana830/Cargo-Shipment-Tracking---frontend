import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getShippingDetail } from '../stores/getShippingDetail';

function GetDetailById() {

    let [shipmentId, setShipmentId] = useState("");

    const { getShipmentById } = getShippingDetail();
    const navigate = useNavigate();



    const handleMap = async (e) => {
        e.preventDefault();


        getShipmentById({ id: shipmentId });

        navigate('/getDetail');
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
                            Get Detail
                        </button>


                    </div>



                </div>
            </form>

        </div>

    )
}

export default GetDetailById