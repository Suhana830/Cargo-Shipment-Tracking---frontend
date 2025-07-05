import React, { useState } from "react";
import { getShippingDetail } from "../stores/getShippingDetail";
import { useNavigate } from "react-router-dom";


const FormPage = () => {
    const [formData, setFormData] = useState({
        containerId: "",
        route: [],
        currentLocation: "",
        deliveredAt: "",
        status: "In Transit", // optional
    });

    const { addShipment } = getShippingDetail();
    const navigate = useNavigate();

    const [newRoute, setNewRoute] = useState(""); // holds current input value


    const addRoute = () => {
        const trimmed = newRoute.trim();
        if (trimmed && !formData.route.includes(trimmed)) {
            setFormData((prev) => ({
                ...prev,
                route: [...prev.route, trimmed],
            }));
            setNewRoute("");
        }
    };

    const removeRoute = (routeToRemove) => {
        setFormData((prev) => ({
            ...prev,
            route: prev.route.filter((r) => r !== routeToRemove),
        }));
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        addShipment(formData);

        setTimeout(() => {
            navigate("/"); // React Router navigation
            window.location.reload(); // Then reload
        }, 2000);


    };



    return (
        <div className="w-[50%] mx-auto p-6 bg-white shadow rounded mt-4">
            <h2 className="text-xl font-bold mb-4">Create Shipment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label className="block font-medium">Container ID</label>
                    <input
                        type="text"
                        name="containerId"
                        value={formData.containerId}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                {/* ROUTE ADD INPUT */}
                <div>
                    <label className="block font-medium">Add Route</label>
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            value={newRoute}
                            onChange={(e) => setNewRoute(e.target.value)}
                            placeholder="Enter city name"
                            className="w-full p-2 border rounded"
                        />
                        <button
                            type="button"
                            onClick={addRoute}
                            className="bg-green-600 text-white px-3 py-2 rounded"
                        >
                            Add
                        </button>
                    </div>
                    {/* Show route chips */}
                    <div className="flex flex-wrap mt-2 gap-2">
                        {formData.route.map((r, i) => (
                            <span
                                key={i}
                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center space-x-2"
                            >
                                <span>{r}</span>
                                <button
                                    type="button"
                                    onClick={() => removeRoute(r)}
                                    className="text-red-500 font-bold ml-2"
                                >
                                    ×
                                </button>
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block font-medium">Current Location</label>
                    <input
                        type="text"
                        name="currentLocation"
                        value={formData.currentLocation}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block font-medium">Delivery Location</label>
                    <input
                        type="text"
                        name="deliveredAt"
                        value={formData.deliveredAt}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block font-medium">Status</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="In Transit">In Transit</option>
                        <option value="Delivered">Delivered</option>

                    </select>
                </div>

                <button
                    type="submit"

                    className="w-full bg-orange-500 text-white  rounded-md hover:bg-orange-400 p-4 font-bold"
                >
                    ADD
                </button>
            </form>


        </div>
    );
};

export default FormPage;
