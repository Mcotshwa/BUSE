import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { async } from 'rxjs';
import { TransactionServiceService } from 'src/app/Services/transaction-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
  standalone: false,
})
export class LogInPage implements OnInit {
  Pass:any;
  Name:any;

  constructor(private service:TransactionServiceService, public router:Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }
  logIn(){
    console.log(this.Pass,this.Name)

    if(this.Pass != null && this.Name != null)
    {
      console.log('LogIn form is valid');
     
      
      let L:any={ Name:this.Name, Pass:this.Pass }
      this.Pass=null;
      this.Name=null

      this.service.logIn(L).subscribe(res=>
        {this.router.navigate(['tabs']),
          console.log(res, "LogIn Successful")
          alert('LogIn Successful')
        },
        err=> {
          this.Pass=null;
          this.Name=null;
          alert('Form not valid')
          console.log('error',err)}
    );
    }
    else{
      this.Pass=null;
      this.Name=null;
      alert('Form not valid')
    }
    
    



  }

}
