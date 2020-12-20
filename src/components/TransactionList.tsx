import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';
import {TransactionType} from '..//context/GlobalState';
export default function TransactionList() {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction:TransactionType) => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </>
    )
}