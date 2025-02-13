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
  logIn(LogIn){
    console.log(LogIn, "Login at service");
    
    return this.http.post(`${this.server}/LogIn`,LogIn);
  }


  addTransaction(Transaction){
    console.log(Transaction, "Transaction at service");
    
    return this.http.post<TransactionInterface>(this.server,Transaction);
  }

  editTransactions(){
    return this.http.get<any>('')
  }

  deleteTransactions(){
    return this.http.get<any>('')
  }
}
