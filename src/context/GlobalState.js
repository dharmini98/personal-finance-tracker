import React, { createContext , useReducer } from 'react'
import AppReducer from './AppReducer'

//Initial state

const initialState ={
    transactions:
    [
      { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 },
    ]
    
}

export const GlobalContext=createContext(initialState);

//Provider component

export const GlobalProvider =({ children })=>{
    const [state, dispatch]= useReducer( AppReducer, initialState);  //useReducer needs a reducer function to determine how the state should be updated when an action is dispatched

    return (<GlobalContext.Provider value={{
        transactions:state.transactions
    }}>
        {children}
    </GlobalContext.Provider>

    )
}