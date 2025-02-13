import { Component } from '@angular/core';
import { TransactionServiceService } from './Services/transaction-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  Pass:any;
  Name:any;
  constructor(private service:TransactionServiceService) {}

  logIn(){
    console.log(this.Pass,this.Name)

    if(this.Pass !== null && this.Name !== null)
    {
      console.log('LogIn form is valid');
     
      
      let L:any={ Name:this.Name, Pass:this.Pass }

      this.service.logIn(L).subscribe(res=>
        {console.log(res, "LogIn Successful")},
        err=> console.log('error',err)
    );
    }
    else{
      alert('Form not valid')
    }
    



  }
}
