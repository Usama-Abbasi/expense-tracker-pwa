import {useReducer,createContext} from 'react';
import AppReducer from './AppReducer';
export type TransactionType={
    id:any,
    text:string,
    amount:number
}
export type StateType={
    transactions:TransactionType[],
    addTransaction:any,
    deleteTransaction:any
}
const initialState:StateType={
    transactions:[],
    addTransaction:null,
    deleteTransaction:null
}
export const GlobalContext=createContext(initialState);

export const GlobalProvider=({children}:{children:any})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);

    function deleteTransaction(id:any) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }
    function addTransaction(transaction:TransactionType) {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
        });
      }
      
    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>

     {children}
    </GlobalContext.Provider>)
}