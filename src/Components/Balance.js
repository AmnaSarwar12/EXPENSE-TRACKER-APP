import React, { useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const  Balance = ()=> {
  
     const { transaction } = useContext(GlobalContext);
     const amounts = transaction.map(transactions=>transactions.amount);
     const total = amounts.reduce((acc , item)=>(acc += item), 0).toFixed(2); 

  return (
      <div>
        <h4>Your Balance</h4>
        <h4>${total}</h4>
    </div>
  );

    }
  



