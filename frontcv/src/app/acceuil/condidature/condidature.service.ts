import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mails } from '../../model/Mails';
import { Condidature } from '../../model/Condidature';

@Injectable({
  providedIn: 'root'
})
export class CondidatureService {

  private host:String="http://localhost:9004/microservice-entrepises";
  constructor(private http:HttpClient) { }

  sendamil(mail:Mails){
    return this.http.post<Mails>(this.host+'/sendmail',mail);

  }
  deletecondidature(id){
    return this.http.delete<Condidature>(this.host+'/candidatures/'+id)
  }
}
