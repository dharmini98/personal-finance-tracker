import React, { createContext , useReducer } from 'react'
import AppReducer from './AppReducer'

//Initial state

const initialState ={
    transactions:
    [
      { id: 1, text: 'Dining', amount: -250 },
      { id: 2, text: 'Salary', amount: 5000 },
      { id: 3, text: 'Rent', amount: -950 },
      { id: 4, text: 'Part-time', amount: 500 },
      { id: 5, text: 'Electricity', amount: -40},
      { id: 6, text: 'Hobbies', amount: -200},
      { id: 7, text: 'Student Loan', amount: -1000},
      { id: 8, text: 'Insurance', amount: -400},
      { id: 9, text: 'Groceries', amount: -300},
    ]
    
}

export const GlobalContext=createContext(initialState);

//Provider component

export const GlobalProvider =({ children })=>{
    const [state, dispatch]= useReducer( AppReducer, initialState);  //useReducer needs a reducer function to determine how the state should be updated when an action is dispatched

    //Actions
    function deleteTransaction(id)
    {
       dispatch(
        {
            type: 'DELETE_TRANSACTION',
            payload: id
        }
       );
    }
    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>

    )
}