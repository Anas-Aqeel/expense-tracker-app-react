import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import  GlobalContext ,{ myContext } from '../context/GlobalState';

export const TransactionList = () => {
 
  let [state, dispatch] = useContext(myContext);
  return (
    <>

      <h3>History</h3>

      <ul className="list">

        <Transaction/>

      </ul>
      
    </>
  )
}
