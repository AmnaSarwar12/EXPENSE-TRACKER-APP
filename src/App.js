import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Balance }  from './Components/Balance';
import { Income } from './Components/Income';
import { HistoryTransaction } from './Components/HistoryTransactions';
import  { AddTransaction }  from './Components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';



function App() {
  return (

    <GlobalProvider>
          <div>
              <Header/>
          
          <div class="container">
              <Balance/>
          </div>
              <Income/>
              <HistoryTransaction/>
              <AddTransaction/>
        </div>
      </GlobalProvider>
  );
}

export default App;
