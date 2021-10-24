import React, { useContext } from 'react';
import { myContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  let [state, dispatch] = useContext(myContext);

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">$ {state.income}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">$ {state.expense}</p>
        </div>
      </div>
  )
}
