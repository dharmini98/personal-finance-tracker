import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts= transactions.map(transaction=>transaction.amount);
  const balance= amounts.reduce((total,item)=>(total+=item),0).toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>

    </div>
  )
}

export default Balance
