

import { getShippingDetail } from '../stores/getShippingDetail'
import CreateRow from './CreateRow';

function DisplayAll() {

    const { result } = getShippingDetail();

    return (

        <div>
            {
                result.map((item) => (
                    <CreateRow key={item._id} item={item} />
                ))
            }
        </div>

    )
}

export default DisplayAll