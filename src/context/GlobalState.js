import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initailState = {
    transaction: [
        { id: 1, text: 'Flower', amount: -20},
        {id: 2, text: 'bag', amount: 70},
        {id: 3, text: 'iphone', amount: -150},
        {id: 4, text: 'Camera', amount: 150}

    ]
}
export const GlobalContext = createContext(initailState);

export const  GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initailState);

    //action
    function deleteTransaction(id){
        dispatch({
            type:'Delete_Transaction',
            payload: id
        })
    }

    function addTransaction(transactions){
        dispatch({
            type:'add_Transaction',
            payload: transactions
        })
    }

    return (<GlobalContext.Provider value={{
        transaction:state.transaction,
        deleteTransaction,
        addTransaction
    }}>
        {children}
        </GlobalContext.Provider>)

}
