import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionInterface } from '../Interfaces/transaction-interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  server=''
  constructor(private http:HttpClient) { }

  getTransactions(){
    return this.http.get<any>(this.server)
  }

  addTransaction(Transaction:TransactionInterface){
    return this.http.get<any>('')
  }

  editTransactions(){
    return this.http.get<any>('')
  }

  deleteTransactions(){
    return this.http.get<any>('')
  }
}
