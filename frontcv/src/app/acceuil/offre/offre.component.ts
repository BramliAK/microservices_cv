import { Component, OnInit } from '@angular/core';
import { EnrepiseaddoffreService } from '../enrepiseaddoffre/enrepiseaddoffre.service';
import { Offre } from '../../model/Offre';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  constructor(private _offre:EnrepiseaddoffreService) { }

  offre:Offre[]=[]
  ngOnInit() {
    this._offre.getoffre().subscribe(res=>{

      
      this.offre=res
      
      console.log(this.offre);
      
    },err=>{
      console.log("eeeeeeeeeeee");
      
    });
  }



}
