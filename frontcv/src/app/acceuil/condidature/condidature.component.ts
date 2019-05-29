import { Component, OnInit, TemplateRef  } from '@angular/core';
import { EnrepiseaddoffreService } from '../enrepiseaddoffre/enrepiseaddoffre.service';
import { ActivatedRoute } from '@angular/router';
import { Condidature } from '../../model/Condidature';
import { HomeService } from '../../home/home.service';
import { RegistrationService } from '../../registration/registration.service';
import { User } from '../../model/User';
import { CondidatureService } from './condidature.service';
import { Mails } from '../../model/Mails';
import { Offre } from '../../model/Offre';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ProfilService } from '../profil/profil.service';

@Component({
  selector: 'app-condidature',
  templateUrl: './condidature.component.html',
  styleUrls: ['./condidature.component.css']
})
export class CondidatureComponent implements OnInit {

  constructor(private modalService: BsModalService,private _offre:EnrepiseaddoffreService,
    private route:ActivatedRoute,private _user:RegistrationService,
    private _send:CondidatureService,private _cv:ProfilService) { }
  id :string =this.route.snapshot.paramMap.get('id');
  condidature:Condidature[]=[]
  val:Array<User>=[]
  listc:Condidature[]=[]
  mail=new Mails()
  offre:Offre
  nomentrepise:string=""
  modalRef: BsModalRef;
  pdfSrc:string="../../../assets/pdf/"
  pdfSrc1:string=""
  openModal(template: TemplateRef<any>,id) {
    this.modalRef = this.modalService.show(template);
    this._cv.getcvbyid(parseInt(id)).subscribe(res=>{
      this.pdfSrc1=this.pdfSrc.concat(res.cvpdf)
      console.log(this.pdfSrc1);
      
    },err=>{
      console.log("errr");
      
    })

  }
  ngOnInit() {

    this._offre.getcondidature(parseInt(this.id)).subscribe(res=>{
      console.log(res);
      this.listc=res
      for (const key in res) {
        console.log(res[key].idclient)
        this._user.getuser(res[key].idclient).subscribe(res2=>{
          let user=new User("","","","","")
          user=res2
          console.log(user);
          
          this.val.push(user)

        })
      }
      
    })
    this._offre.getoffrebyid(parseInt(this.id)).subscribe(res=>{
      
      this.nomentrepise=res.nomentrepise
      
    })
    console.log("rrrrrrrr");
    
    console.log(this.val);
    
  }
  delete(id,idcon){
    this._user.getuser(id).subscribe(res2=>{
      
      
      this.mail.touser=res2.email
      this.mail.subjects=this.nomentrepise
      this.mail.texts="dsl"
      this._send.sendamil(this.mail).subscribe(ress=>{
        console.log("ggggggggg");
        
      });
      

    })
    console.log(idcon);
    
    this._send.deletecondidature(parseInt(idcon)).subscribe(res=>{
      this._offre.getcondidature(parseInt(this.id)).subscribe(res=>{
       
        this.listc=res
       
        
      })
      
    },err=>{
      console.log("errr");
      
    })
console.log(this.val);

  }

}
