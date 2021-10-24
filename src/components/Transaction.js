import React, {useContext} from 'react';
import GlobalState, { myContext } from '../context/GlobalState';



export const Transaction = () => {

  let [state, dispatch] = useContext(myContext);
return (
    <>
    {state.transactions.map((e)=>{

      return <li key={e.id} className={e.type == 'income' ? 'plus': 'minus'}>
        <span>{e.desc}</span>$ {e.amount}<button onClick={()=> dispatch({type: 'delete', payload: e})} className="delete-btn">x</button>
    </li>
    })}
     
    </>
)

}
