import { Component, OnInit } from '@angular/core';
import { Login } from '../model/Login';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login= new Login("","")
  constructor(private router : Router,private _homeservice:HomeService) { }

  ngOnInit() {
    
  }
  onSubmit(){
    //console.log(this.login);
    this._homeservice.login(this.login).subscribe(res=>{

      console.log(res)

      this._homeservice.saveToken(res.id,res.email);
      this.router.navigateByUrl('/Home');
    },
  err=>{
    console.log("errrrrreur")
  })

  }

}
