import React from 'react'
import { UserCircle } from "lucide-react"
import AddShipment from './AddShipment'
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <div className=" p-3  border-b-2 sticky top-0 bg-gray-400">

            <div className="flex justify-between pl-2 pr-2">


                <Link to="/">
                    <div className="bg-orange-500 text-white rounded-md p-2" >

                        <h1 className="font-extrabold">Cargo Shipment Tracker</h1>

                    </div>
                </Link>



                <div className="flex gap-3 items-center">
                    <AddShipment />
                    <UserCircle className="bg-blue-400 rounded-full" />
                    <p className="font-semibold">Login/Signup</p>
                </div>

            </div>
        </div>
    )
}

export default Nav