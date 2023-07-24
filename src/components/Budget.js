import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses, budget, dispatch } = useContext(AppContext);
    const [cost, setCost] = useState(budget)
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: <input
                required='required'
                type='number'
                id='budget'
                value={cost}
                style={{ marginLeft: '2rem', size: 10 }}
                onChange={(event) => {
                    let value = event.target.value;
                    if(value > 20000) {
                        alert("The value cannot exceed 20000 :(")
                        value = 20000
                    } else if(value < totalExpenses) {
                        alert("The value cannot fall below total expenses :(")
                        value = totalExpenses
                    }
                    setCost(value);
                    dispatch({
                        type: 'SET_BUDGET',
                        payload: value,
                    });
                }}>
            </input></span>
        </div>
    );
};
export default Budget;