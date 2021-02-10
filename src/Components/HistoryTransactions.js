import React, { useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Transaction} from './Transaction';

export const  HistoryTransaction = ()=> {
    const { transaction } = useContext(GlobalContext);
    
    
  return (
      <div>
          <h5>HISTORY</h5>
       <ul className="list">
          {transaction.map(transactions=>(<Transaction key={transactions.id}  transactions={transactions} />))}
          
       </ul>
    </div>
  );

    
  
}

// export default HistoryTransaction;
