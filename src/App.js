import { useEffect } from 'react';
import Nav from "./components/Nav";
import { getShippingDetail } from './stores/getShippingDetail';

import { Route, Routes } from "react-router-dom";
import RouteMap from './page/RouteMap';

import HomePage from './page/HomePage';
import FormPage from './page/FormPage';

import DisplayDetail from './page/DisplayDetail';

function App() {

  const { getAllShipments, shipments, mapShipment } = getShippingDetail();

  useEffect(() => {
    getAllShipments();
  }, []);

  console.log(shipments);

  return (

    <div className=' relative'>

      <Nav />

      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path='/map' element={<RouteMap />} />
        <Route path='/newshipment' element={<FormPage />} />
        <Route path='/getDetail' element={<DisplayDetail item={mapShipment} />} />



      </Routes>


    </div>

  );
}

export default App;
