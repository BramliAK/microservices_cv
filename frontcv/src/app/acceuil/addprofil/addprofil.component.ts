import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home/home.service';
import { Cv } from '../../model/Cv';
import { ProfilService } from '../profil/profil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addprofil',
  templateUrl: './addprofil.component.html',
  styleUrls: ['./addprofil.component.css']
})
export class AddprofilComponent implements OnInit {

  constructor(private _auth:HomeService,private _profil:ProfilService,private router:Router) { }
  cv=new Cv("","","","")
  message:string
  count:boolean=true
  files : FileList; 
  idclient:string
  ngOnInit() {
  }
  getFiles(event){ 
    this.files = event.target.files; 
}
  
  onSubmit(){
    this.idclient= this._auth.loadid();
    this.cv.iduser=parseInt(this.idclient); 
    this._profil.addcv(this.cv,this.files).subscribe(res=>{
      this.router.navigateByUrl('/profil');
      console.log(res);
      
      
    },err=>{
      console.log("errrrrrrrr");
      
    })
    
  }

}
