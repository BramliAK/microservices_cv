import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home/home.service';
import { ProfilService } from '../profil/profil.service';
import {  ActivatedRoute } from '@angular/router';
import { EnrepiseaddoffreService } from '../enrepiseaddoffre/enrepiseaddoffre.service';
import { Offre } from '../../model/Offre';
import { Cv } from '../../model/Cv';
import { Condidature } from '../../model/Condidature';
import { DemandeoffreService } from './demandeoffre.service';

@Component({
  selector: 'app-demandeoffre',
  templateUrl: './demandeoffre.component.html',
  styleUrls: ['./demandeoffre.component.css']
})
export class DemandeoffreComponent implements OnInit {

  constructor(private _auth:HomeService,private _profil:ProfilService ,private route:ActivatedRoute
    ,private _offre:EnrepiseaddoffreService,private _condidature:DemandeoffreService) { }
  idclient:string
  id :string =this.route.snapshot.paramMap.get('id');
  offre= new Offre("","","","","")
  
  cvs:Cv[]=[]
  condidature=new Condidature()
  ngOnInit() {
    
    
    this._offre.getoffrebyid(parseInt(this.id)).subscribe(res=>{
      this.offre=res
      
      console.log(res);
      
    },err=>{
      console.log("eeeeeeeeeeeee");
      
    })
    this.idclient= this._auth.loadid();

    this._profil.getcvbyuser(parseInt(this.idclient)).subscribe(ress=>{
      this.cvs=ress
      
    })

    this.condidature.idclient=parseInt(this.idclient)
    

  }

  onSubmit(){
    this.condidature.idemploit=parseInt(this.id)
    console.log(this.condidature);
    this._condidature.addcondidature(this.condidature).subscribe(res=>{
      console.log(res);
      
    },err=>{
      console.log("err");
      
    })
    

  }

}
