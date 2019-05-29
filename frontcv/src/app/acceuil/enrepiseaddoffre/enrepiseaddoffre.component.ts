import { HomeService } from './../../home/home.service';
import { EnrepiseaddoffreService } from './enrepiseaddoffre.service';
import { Component, OnInit } from '@angular/core';
import { Offre } from '../../model/Offre';

@Component({
  selector: 'app-enrepiseaddoffre',
  templateUrl: './enrepiseaddoffre.component.html',
  styleUrls: ['./enrepiseaddoffre.component.css']
})
export class EnrepiseaddoffreComponent implements OnInit {

  idclient:string
  offre=new Offre("","","","","")
message:string
count:boolean=true
  constructor(private  _enro:EnrepiseaddoffreService,private _auth:HomeService) { }


  ngOnInit() {
  }

  onSubmit(){

    
     this.idclient= this._auth.loadid();
    this.offre.idClient=parseInt(this.idclient);
    console.log(this.offre);
    this._enro.addoffre(this.offre).subscribe(res=>{
     // console.log(res)
     this.message="valide add"
     this.count=true
    },
  err=>{
    this.message="please try again "
    this.count=false
  });

  }

}
