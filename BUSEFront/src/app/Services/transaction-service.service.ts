import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddTransactionInterface, TransactionInterface } from '../Interfaces/transaction-interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  server='https://localhost:7015/api/Transaction'
  params = {};
  headers = {};
  constructor(private http:HttpClient) { }

  getTransactions(){
    return this.http.get<TransactionInterface[]>(this.server,this.params);
  }

  addTransaction(Transaction){
    console.log(Transaction);
    // let t:AddTransactionInterface={TransactionDescription:Transaction.Description,
    //   TransactionNo:0,TransactionAmount:Transaction.Amount,
    //   TransactionDate:Transaction.Datetime,
    // }
    return this.http.post<TransactionInterface>(this.server,Transaction);
  }

  editTransactions(){
    return this.http.get<any>('')
  }

  deleteTransactions(){
    return this.http.get<any>('')
  }
}
