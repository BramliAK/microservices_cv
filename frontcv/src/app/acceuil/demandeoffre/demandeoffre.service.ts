import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Condidature } from '../../model/Condidature';

@Injectable({
  providedIn: 'root'
})
export class DemandeoffreService {

  constructor(private http:HttpClient ) { }

  private host:String="http://localhost:9004/microservice-entrepises";
  getCondidature(){
    return this.http.get<Condidature[]>(this.host+'/emploit')
  }

  getcondidaturebyid(id:number){
    return this.http.get<Condidature>(this.host+'/candidatures/'+id)
  }
  getcondidaturebyoffre(){

  }
  refuserconsdidature(){

  }
  acceptercondiature(){

  }

  addcondidature(condidature:Condidature){
    return this.http.post<Condidature>(this.host+'/candidatures',condidature)
  }
}
