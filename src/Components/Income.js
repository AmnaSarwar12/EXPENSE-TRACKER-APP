import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import '../App.css';

export const  Income = ()=> {
  const { transaction } = useContext(GlobalContext);
  const amounts = transaction.map(transactions=>transactions.amount);

  const income = amounts.filter(item => item > 0).reduce((acc,item) =>(acc += item), 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc,item) =>(acc += item), 0) *-1 ).toFixed(2);

  return (
      <div className="inc-exp-container">
          <div className="money.plus">
            <h5>Income</h5>
            <p class="pluss">+${income}</p>
          </div>
          <div className="money.minus">
              <h5>EXPENSE</h5>
              <p class="minuss">-${expense}</p>
          </div>
        
    </div>
    
  );

    }
  



