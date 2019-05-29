import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Offre } from '../../model/Offre';
import { Condidature } from '../../model/Condidature';

@Injectable({
  providedIn: 'root'
})
export class EnrepiseaddoffreService {

  private host:String="http://localhost:9004/microservice-entrepises";
  constructor(private http:HttpClient) { }

  getoffre(){
    return this.http.get<Offre[]>(this.host+'/emploit');
  }
  getoffrebyid(id:number){
    
    return this.http.get<Offre>(this.host+'/emploits/'+id);
  }
  getoffrebyiduser(iduser:number){
    return this.http.get<Offre[]>(this.host+'/emploit/iduser/'+iduser);
  }

  addoffre(offre:Offre){
    return this.http.post<Offre>(this.host+'/emploits',offre,{headers:new HttpHeaders({'Content-Type': 'application/json'})});

  }

  deleteoffre(id:number){

    return this.http.delete<Offre>(this.host+'/emploits/'+id);

  }
  updateoffre(id:number,offre:Offre){

    return this.http.put<Offre>(this.host+'/emploits/'+id,offre,{headers:new HttpHeaders({'Content-Type': 'application/json'})})

  }
  nbroffre(id:number){
    return this.http.get<number>(this.host+'/nbrcondidature/'+id)
  }

  getcondidature(idoffre:number){
    return this.http.get<Condidature[]>(this.host+'/condidaturebyidoffre/'+idoffre)
  }
}
