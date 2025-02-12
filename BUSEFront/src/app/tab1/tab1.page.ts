import { Component } from '@angular/core';
import { TransactionServiceService } from '../Services/transaction-service.service';
import { TransactionInterface } from '../Interfaces/transaction-interface';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  transactionsList:TransactionInterface[]=[];
  constructor( private TransactionService:TransactionServiceService) {
  }
   
  
  //replacement for ngoninit in ion
  //they are called lifecycle hooks
  ionViewWillEnter() {
    console.log('hello')
    //var transactionsList:TransactionInterface[]=[];
    this.TransactionService.getTransactions().subscribe(transactions => {
      this.transactionsList=transactions;
      console.log('Transactions', transactions,this.transactionsList)
    },
    err=> console.log('error',err)
  )
  }
  // ionViewDidLoad() {
  //   console.log('hello')
  //   this.TransactionService.getTransactions().subscribe(transactions => {
  //     console.log('Transactions', transactions)
  //   },
  //   err=> console.log('error',err)
  // )
  // }
  

}
