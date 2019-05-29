import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/app/model/Offre';
import { EnrepiseaddoffreService } from '../enrepiseaddoffre/enrepiseaddoffre.service';
import { HomeService } from 'src/app/home/home.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-enrepiseeditoffre',
  templateUrl: './enrepiseeditoffre.component.html',
  styleUrls: ['./enrepiseeditoffre.component.css']
})
export class EnrepiseeditoffreComponent implements OnInit {
  idclient:string
  offre=new Offre("","","","","")
message:string
count:boolean
 id :string =this.route.snapshot.paramMap.get('id');
  constructor(private  _enro:EnrepiseaddoffreService,private _auth:HomeService,private route:ActivatedRoute) { }

  ngOnInit() {
    
    
    this._enro.getoffrebyid(parseInt(this.id)).subscribe(res=>{
      console.log(res)
this.offre=res
    })
  }

  onSubmit(){
    this._enro.updateoffre(parseInt(this.id),this.offre).subscribe(res=>{
      console.log(res);
      this.message="valide add"
     this.count=true
    },
  err=>{
    this.message="please try again "
    this.count=false
  });
  }

}
