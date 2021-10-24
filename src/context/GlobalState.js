import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
 transactions: [],
 income: 0,
 expense: 0
}


export let myContext = createContext();



const GlobalState = ({children}) => {
   let [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    
    <myContext.Provider value={[state, dispatch]}>
      {children}
    </myContext.Provider>
  )
}

export default GlobalState




