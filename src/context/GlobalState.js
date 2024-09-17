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
    ],
    baseCurrency:'USD',
    targetCurrency: 'INR',
    exchangeRates: {},
    
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
    function addTransaction(transaction)
    {
       dispatch(
        {
            type: 'ADD_TRANSACTION',
            payload: transaction
        }
       );
    }
    function setBaseCurrency(currency){
        dispatch({
            type:'SET_BASE_CURRENCY',
            payload: currency,
        });
    }
    function setTargetCurrency(currency){
        dispatch({
            type:'SET_TARGET_CURRENCY',
            payload:currency,
        })
    }
    function setExchangeRates(rates){
       dispatch({
             type:'SET_EXCHANGE_RATE',
             payload: rates,
       })
    }
    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        baseCurrency:state.baseCurrency,
        targetCurrency:state.targetCurrency,
        exchangeRates:state.exchangeRates,
        deleteTransaction,
        addTransaction,
        setBaseCurrency,
        setTargetCurrency,
        setExchangeRates,
    }}>
        {children}
    </GlobalContext.Provider>

    )
}