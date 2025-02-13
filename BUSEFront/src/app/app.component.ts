import { Component } from '@angular/core';
import { TransactionServiceService } from './Services/transaction-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  Pass:any;
  Name:any;
  constructor(private service:TransactionServiceService, public router:Router) {}

  logIn(){
    console.log(this.Pass,this.Name)

    if(this.Pass != null && this.Name != null)
    {
      console.log('LogIn form is valid');
     
      
      let L:any={ Name:this.Name, Pass:this.Pass }
      this.Pass=null;
      this.Name=null

      this.service.logIn(L).subscribe(res=>
        {console.log(res, "LogIn Successful"),
          this.router.navigate([''])
        },
        err=> console.log('error',err)
    );
    }
    else{
      this.router.navigateByUrl("/tabs/tab1");
      alert('Form not valid')
    }
    



  }
}
