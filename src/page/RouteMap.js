import { useEffect } from 'react';
import Cookies from 'js-cookie';
import MapboxRouteMap from '../components/MapboxRouteMap';
import ShipmentSummaryRow from '../components/ShipmentSummaryRow';
import { getShippingDetail } from '../stores/getShippingDetail';

const RouteMap = () => {
  const { mapShipment, getShipmentById } = getShippingDetail();

  useEffect(() => {
    const idFromCookie = Cookies.get('shipmentId');
    if (idFromCookie && !mapShipment?._id) {
      getShipmentById({ id: idFromCookie });
    }
  }, [getShipmentById, mapShipment?._id]);

  if (!mapShipment) return <div className='text-center py-10'>No Data Found</div>;

  console.log("route", mapShipment?.route, "  currentlocation : ", mapShipment?.currentLocation);

  return (
    <>
      <div className='py-2'>
        <ShipmentSummaryRow shipment={mapShipment} />
      </div>

      <MapboxRouteMap route={mapShipment.route} currentLocation={mapShipment.currentLocation} />
    </>
  );
};

export default RouteMap;