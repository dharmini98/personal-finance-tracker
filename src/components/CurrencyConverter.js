import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const CurrencyConverter = () => {

    const{transactions}=useContext(GlobalContext);
    const[exchangeRates, setExchangeRates]=useState({});
    const [baseCurrency, setBaseCurrency]=useState('USD');
    const [targetCurrency, setTargetCurrency]=useState('INR');
    const [convertedIncome, setConvertedIncome]=useState(0);
    cosnt [convertedExpenses, setConvertedExpenses]=useState(0);

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
      
    </div>
  )
}

export default CurrencyConverter
