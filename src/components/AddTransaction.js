import React, {useState, useContext} from 'react'
import { myContext } from '../context/GlobalState';

export const AddTransaction = () => {

let [description, setDescription] = useState('');
let [amount, setAmount] = useState(0);
let [state, dispatch] = useContext(myContext)

const handleSumbit = (e)=>{

   
  e.preventDefault();
  setAmount(parseInt(amount));
  if (amount>0) {
    dispatch(
      {
        type: 'income'
        ,payload: {desc:description, amount}
      })
    
  } else if(amount < 0){
    
    dispatch(
      {
        type: 'expense'
        ,payload: {desc:description, amount}
      })
  }
  setAmount(0)
  setDescription('')
}

  return (
    <>
      <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"  placeholder="Enter text..."  value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter amount..." />
        </div>
        <button className="btn" onClick={(e)=>{handleSumbit(e)}}>Add transaction</button>
      </form>
    </>
  )
}
