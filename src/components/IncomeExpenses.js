import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const IncomeExpenses = () => {

  const {transactions} = useContext(GlobalContext);
  //map through each value of transaction. If it is +ve, it gets added
  //Income. If -ve, it gets added to expense
  let income;
  let expense;
  transactions.forEach((transaction)=>{
    if (transaction.amount>0)
      {
        income+= transaction.amount
      }
    else if(transaction.amount<0)
     {
        expense-=transaction.amount
     }
  })
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${expense}</p>
        </div>
      </div>
    </div>
  )
}

export default IncomeExpenses
