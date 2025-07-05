import { create } from "zustand";
import axios from "../lib/axios.js";

import { toast } from 'react-hot-toast'


export const getShippingDetail = create((set, get) => ({

    shipments: [],
    result: [],
    mapShipment: null,


    getAllShipments: async () => {
        try {
            const res = await axios.get('/shipments');
            const data = res.data.data;

            set({ shipments: data, result: data });

        } catch (error) {
            set({ shipments: [], result: [] });
            const message = error.response?.data?.error || "Something went wrong";
            toast.error(message);
        }
    },

    applyFilter: async (searchFields) => {
        const { shipments } = get();
        let res = [...shipments];

        if (searchFields.containerId) {
            res = res.filter((s) =>
                s.containerId.toLowerCase().includes(searchFields.containerId.toLowerCase())
            );
        }

        if (searchFields.shipmentId) {
            res = res.filter((s) =>
                s._id.toLowerCase().includes(searchFields.shipmentId.toLowerCase())
            );
        }

        if (searchFields.currentLocation) {
            res = res.filter((s) =>
                s.currentLocation.toLowerCase().includes(searchFields.currentLocation.toLowerCase())
            );
        }

        if (searchFields.deliveredAt) {
            res = res.filter((s) =>
                s.deliveredAt.toLowerCase().includes(searchFields.deliveredAt.toLowerCase())
            );
        }

        if (searchFields.status) {
            res = res.filter((s) => s.status === searchFields.status);
        }

        if (searchFields.sortBy === 'etaAsc') {
            res.sort((a, b) => new Date(a.currentETA) - new Date(b.currentETA));
        } else if (searchFields.sortBy === 'etaDesc') {
            res.sort((a, b) => new Date(b.currentETA) - new Date(a.currentETA));
        }

        set({ result: res });
    },

    clearFilter: async () => {
        const { shipments } = get();
        set({ result: shipments });
    },
    addShipment: async (data) => {

        console.log("addshipment data ", data);

        try {
            await axios.post("/shipment", data);
            toast.success("Shipment added successfully!");
        } catch (error) {
            console.error("Add Shipment Error:", error?.response?.data || error.message);
            toast.error("Failed to add shipment. Please try again.");
        }

    },
    updateCurrentLocation: async ({ id, newLocation }) => {

        console.log("id: ", id, " newLocation : ", newLocation)
        try {



            await axios.post(`/shipment/${id}/update-location`, { newLocation });
            toast.success("Location updated successfully !");

        } catch (error) {
            console.error("Location update error");
            toast.error("Failed to update location");
        }
    },
    getShipmentById: async ({ id }) => {



        try {

            const res = await axios.get(`/shipment/${id}`);
            console.log("Fetched shipment:", res.data.data);
            set({ mapShipment: res.data.data });

        } catch (error) {
            console.error("Error in getting shipment by Id");
            toast.error("Failed to get Shipment By Id");
        }
    }

}))
