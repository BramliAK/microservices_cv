import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  private host:String="http://localhost:9004/microservice-users/appUsers";
  private roles:Array<{any}>
  private jwtToken=null;
  
  constructor(private http:HttpClient) { }
 
  adduser(user:User){
    return this.http.post<User>(this.host+'/',user,{headers:new HttpHeaders({'Content-Type': 'application/json'})});

  }

  getuser(id:number){
    return this.http.get<User>(this.host+'/'+id)
  }



}
