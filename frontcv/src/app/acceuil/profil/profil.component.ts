import { Component, OnInit } from '@angular/core';
import { Cv } from '../../model/Cv';
import { ProfilService } from './profil.service';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  cvs:Cv[]=[]
  idclient:string;
  constructor(private _auth:HomeService,private _cv:ProfilService) { }

  ngOnInit() {
    this.idclient= this._auth.loadid();
    this._cv.getcvbyuser(parseInt(this.idclient)).subscribe(res=>{
      console.log(res)
      this.cvs=res
    },
    err=>{
      console.log("errr");
      
    })
  }

  delete(id){

    this._cv.deletecv(id).subscribe(res=>{

      this._cv.getcvbyuser(parseInt(this.idclient)).subscribe(res=>{
        console.log(res)
        this.cvs=res
      },
      err=>{
        console.log("errr");
        
      })
      
    },err=>{
      console.log("errrr");
      
    })

  }

}
