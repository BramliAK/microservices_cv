import { User } from './../model/User';
import { Login } from './../model/Login';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
//import { JwtHelper } from 'angular2-jwt';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private host:String="http://localhost:9004/microservice-users";
  private roles:Array<{any}>
  

  constructor(private http:HttpClient,private router : Router) { }
  login(login:Login){
    
     console.log(login)
     
    return this.http.post<User>(this.host+"/AppUsers/login",login,{headers:new HttpHeaders({'Content-Type': 'application/json'})})
    ;
  }
  
  saveToken(id :number,email:string){
   
    localStorage.setItem("id",id.toString())
    localStorage.setItem("email",email)
   
  
  }
  loadid(){
    return localStorage.getItem("id");
  }
  loademail(){
    return localStorage.getItem("email");
  }
  

  logout(){
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    this.router.navigateByUrl('/login');
    
  }

}
