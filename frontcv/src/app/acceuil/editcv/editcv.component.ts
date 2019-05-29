import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home/home.service';
import { ProfilService } from '../profil/profil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from '../../model/Cv';

@Component({
  selector: 'app-editcv',
  templateUrl: './editcv.component.html',
  styleUrls: ['./editcv.component.css']
})
export class EditcvComponent implements OnInit {

  constructor(private _auth:HomeService,private _profil:ProfilService,private route:ActivatedRoute,private router : Router) { }
   id :string =this.route.snapshot.paramMap.get('id');
  message:string
  count:boolean=true
  files : FileList; 
  idclient:string

  cv=new Cv("","","","")
  ngOnInit() {

    this._profil.getcvbyid(parseInt(this.id)).subscribe(res=>{

      console.log(res);
      
      
      this.cv=res
      

    },err=>{
      console.log("errrr");
      
    })
  }

  getFiles(event){ 
    this.files = event.target.files; 
}
  
  onSubmit(){
    
    this._profil.editcv(this.cv,this.files,parseInt(this.id)).subscribe(res=>{
      this.router.navigateByUrl('/profil');
      
    },err=>{
      console.log("rrrr");
      
    })
    
  }

}
