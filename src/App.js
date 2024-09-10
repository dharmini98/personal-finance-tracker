import React from 'react';
import './App.css';
import Header  from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState';
import CurrencyConverter from './components/CurrencyConverter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <GlobalProvider>
      <Router>
      <Header />
      <div className="container">
        <Routes>
        <Route exact path="/"
        element={
        <>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
        </>
        }
        />
        <Route exact path="/currency-converter" element={<CurrencyConverter/>}/>
        </Routes>
      </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
