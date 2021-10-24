import React, { useContext } from 'react';
import { myContext } from '../context/GlobalState';



export const Balance = () => {

let [state, dispatch] = useContext(myContext);

return (
    <>
      <h4>Your Balance</h4>
      <h1>{state.income + state.expense}</h1>
    </>
)

}
