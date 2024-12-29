import React from 'react'
import { GlobalContext } from '../Context/GlobalState';

import { Transaction } from './Transaction';

export const TransactionList = () => {
  const {transactions} = React.useContext(GlobalContext);
  
  return (
    <>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction ={transaction}/>
        ))}
      </ul>
    </>
  )
}