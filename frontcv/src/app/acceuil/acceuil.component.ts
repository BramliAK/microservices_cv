import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration/registration.service';
import { HomeService } from '../home/home.service';
import { User } from '../model/User';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor(private _user:RegistrationService,private _auth:HomeService) { }

  user=new User("","","","","")
  nbr:number;
  role:boolean=false
  role2:boolean=false
  ngOnInit() {
    this.nbr=parseInt(this._auth.loadid());
    this._user.getuser(this.nbr).subscribe(res=>{
      this.user=res
      console.log(res.role);
      
       
      if (res.role=="ROLE_ENR") {
        this.role=true;
      }


      if(res.role=="ROLE_USER") {
        this.role2=true;
        
      }
      
      
    })
  }

}
