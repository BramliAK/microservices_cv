import { Offre } from './../../model/Offre';
import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, Input } from '@angular/core';
import { EnrepiseaddoffreService } from '../enrepiseaddoffre/enrepiseaddoffre.service';
import { HomeService } from '../../home/home.service';
import { delay } from 'q';

@Component({
  selector: 'app-enrepiseoffre',
  templateUrl: './enrepiseoffre.component.html',
  styleUrls: ['./enrepiseoffre.component.css']
})
export class EnrepiseoffreComponent implements OnChanges,DoCheck,OnInit {

  @Input() logg:boolean=true;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }
  offre=new Offre("","","","","")
  offres:Offre[]=[]
  idclient:string
  val:string[]=[]
  val2:number
  constructor(private _entroffre:EnrepiseaddoffreService,private _auth:HomeService) { }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    
  }

  ngOnInit() {

    this.idclient= this._auth.loadid();
    
     
    this._entroffre.getoffrebyiduser(parseInt(this.idclient)).subscribe(res=>{
      
      this.offres=res
     
      
      
    },
  err=>{
    console.log("erreur");
    
  })
  }

  async  setval(id){
    await delay(300);
    this._entroffre.nbroffre(id).subscribe(ress=>{
      
      this.val2=ress
      
      
    });
    console.log(this.val2);
  }

  delete(id){
    console.log(id);
    
    this._entroffre.deleteoffre(id).subscribe(res=>{
      this._entroffre.getoffrebyiduser(parseInt(this.idclient)).subscribe(res=>{
        console.log(res)
        this.offres=res
      },
    err=>{
      console.log("erreur");
      
    })
    })

  }
  aff(){
this.logg=true;
  }
  aff1(){
this.logg=false;
  }


}
