
import FilterArea from '../components/FilterArea';


import UpdateLocation from '../components/UpdateLocation';
import GetMap from '../components/GetMap';
import { getShippingDetail } from '../stores/getShippingDetail';
import ShowTable from '../components/ShowTable';
import GetDetailById from '../components/GetDetailById';


function Home() {

    const { shipments, result } = getShippingDetail();

    return (
        <>
            <div className='font-bold text-4xl text-gray-500 mt-8 justify-center my-2'>
                <p className=' text-center'>Records of All Shipments</p>
            </div>


            <div className='flex justify-center p-2'>
                <div className='bg-white w-[90%] rounded-md'>

                    <FilterArea />



                    {shipments.length === 0 ? (
                        <div className="text-center text-gray-600 mt-6">
                            <h1 className="font-bold text-2xl">No Shipment Records Available</h1>
                            <p className="text-sm mt-2">No data found in the system yet.</p>
                        </div>
                    ) : result.length === 0 ? (
                        <div className="text-center text-gray-600 mt-6">
                            <h1 className="font-bold text-2xl">No Matching Records</h1>
                            <p className="text-sm mt-2">Try clearing or adjusting your filters.</p>
                        </div>
                    ) : (
                        <ShowTable />
                    )}

                </div>
            </div>



            <div>
                <div>
                    {shipments.length > 0 && (
                        <>
                            <GetDetailById />
                            <UpdateLocation />
                            <GetMap />
                        </>
                    )}
                </div>

            </div>
        </>
    )
}

export default Home