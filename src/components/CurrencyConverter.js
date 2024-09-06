import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const CurrencyConverter = () => {

    const{transactions}=useContext(GlobalContext);
    const[exchangeRates, setExchangeRates]=useState({});
    const [baseCurrency, setBaseCurrency]=useState('USD');
    const [targetCurrency, setTargetCurrency]=useState('INR');
    const [convertedIncome, setConvertedIncome]=useState(0);
    const [convertedExpenses, setConvertedExpenses]=useState(0);

    useEffect(()=>{
      fetch(`https://api.exchangerate.host/latest?base=${baseCurrency}`)
      .then((response)=>response.json())
      .then((data)=>setExchangeRates(data.rates))
      .catch((error)=>console.error('Error fetching exchange rates:', error));
    }, [baseCurrency]);


    useEffect(()=>{
        if(Object.keys(exchangeRates).length>0){
            const income=transactions.filter((transaction)=>transaction.amount>0)
                                     .reduce((acc, transaction)=>(acc+=transaction.amount),0);

            const expense=transactions.filter((transaction)=>transaction.amount<0)
                                     .reduce((acc, transaction)=>(acc+=transaction.amount),0); 
            const rate=exchangeRates[targetCurrency];
            
            if(rate){
                setConvertedIncome((income*rate).toFixed(2));
                setConvertedExpenses((expense * rate).toFixed(2));
            }
        }
    })
  
    return (
        <div>
          <h2>Currency Converter</h2>
          <div>
            <label>
              Base Currency:
              <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
                {Object.keys(exchangeRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label>
              Target Currency:
              <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
                {Object.keys(exchangeRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <h3>Converted Amounts</h3>
            <p>Total Income in {targetCurrency}: {convertedIncome}</p>
            <p>Total Expenses in {targetCurrency}: {convertedExpenses}</p>
          </div>
        </div>
      );
    };

export default CurrencyConverter;
