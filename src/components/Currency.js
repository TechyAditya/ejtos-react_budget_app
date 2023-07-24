import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [localCur, setCur] = useState(currency);
    return (<div>
        <select id='currency' name='currency' 
        value={localCur} onChange={(event) => {
            dispatch({
                type: 'CHG_CURRENCY',
                payload: event.target.value,
            });
            setCur(event.target.value)
        }}>
            <option value='£'><b>£</b> Pound</option>
            <option value='$'><b>$</b> Dollar</option>
            <option value='€'><b>€</b> Euro</option>
            <option value='र'><b>र</b> Ruppee</option>
        </select>
    </div>)
}
export default Currency;