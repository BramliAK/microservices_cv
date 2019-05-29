import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';
import { User } from '../model/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user=new User("","","","","")
  pwd:string=""
  count:boolean=true
  message:string
  constructor(private _regi:RegistrationService) { }

  ngOnInit() {

   
  }
  onSubmit(){
    console.log(this.user);
    if (this.user.password==this.pwd) {
      this._regi.adduser(this.user).subscribe(res=>{
        console.log(res)
        this.message="valide add"
        this.count=true
       },
     err=>{
       this.message="please try again "
       this.count=false
     });
      
    }else{
      this.message="verifier le mot de passe "
      this.count=false

    }
    
  }
}
