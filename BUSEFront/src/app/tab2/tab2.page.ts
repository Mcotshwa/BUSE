import { Component } from '@angular/core';
import { TransactionServiceService } from '../Services/transaction-service.service';

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

  

  addTransaction(){
    console.log(this.Description,this.Amount,this.Datetime)

    if(this.Description !== null && this.Amount !== null 
      && this.Datetime !== null)
    {
      console.log('Add Transaction form is valid');
     
      
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
