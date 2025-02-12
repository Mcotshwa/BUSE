import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonDatetime } from '@ionic/angular/standalone';
import { TransactionServiceService } from '../Services/transaction-service.service';
import { AddTransactionInterface } from '../Interfaces/transaction-interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
// @NgModule({
//   imports:[
//    IonDatetime,
//    FormsModule,
//    ReactiveFormsModule
// ]})
export class Tab2Page {

     Description: any;
    Amount: any;
    Datetime:any;
  constructor(private service:TransactionServiceService) {}

  addTrForm=new FormGroup({
    Description: new FormControl('',Validators.required),
    Amount: new FormControl(Number,Validators.required),
    Datetime: new FormControl(typeof IonDatetime,Validators.required)
  },);

  addTransaction(){
    console.log(this.Description,this.Amount,this.Datetime)

    if(this.Description !== null && this.Amount !== null 
      && this.Datetime !== null)
    {
      console.log('Add Transaction form is valid');
     
      this.addTrForm.reset();
      let T:any={TransactionNo:0, TransactionDescription:this.Description,
        TransactionAmount:this.Amount, TransactionDate:this.Datetime
      }
      this.service.addTransaction(T).subscribe(res=>console.log(res));
    }
    else{
      alert('Form not valid')
    }
    

  }

}
