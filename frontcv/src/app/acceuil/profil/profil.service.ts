import { Cv } from './../../model/Cv';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private host:String="http://localhost:9004/microservice-users";
  constructor( private Http:HttpClient) { }


  getcvbyuser(id:number){
    return this.Http.get<Cv[]>(this.host+'/cvid/'+id);
  }
  getcvbyid(id:number){
    return this.Http.get<Cv>(this.host+'/cvs/'+id);
  }

  addcv(cv:Cv,file){

    console.log(cv);
    
    let formdata: FormData = new FormData();
    formdata.append('file', file[0]);
    formdata.append('nom',cv.nom);
    formdata.append('description',cv.description);
    formdata.append('iduser',String(cv.iduser));
    
    return this.Http.post<Cv>(this.host+'/doUpload',formdata);
  } 

  editcv(cv:Cv,file,id:number){
    console.log(cv);
    
    let formdata: FormData = new FormData();
    formdata.append('file', file[0]);
    formdata.append('nom',cv.nom);
    formdata.append('description',cv.description);
    formdata.append('iduser',String(cv.iduser));
    
    return this.Http.post<boolean>(this.host+'/doUpload/'+id,formdata);

  }
  deletecv(id:number){
    
    return this.Http.delete<Cv>(this.host+'/cvs/'+id);
  }
}
