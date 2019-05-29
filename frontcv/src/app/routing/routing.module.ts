import { EnrepiseaddoffreComponent } from './../acceuil/enrepiseaddoffre/enrepiseaddoffre.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegistrationComponent } from '../registration/registration.component';
import { AcceuilComponent } from '../acceuil/acceuil.component';
import { EnrepiseeditoffreComponent } from '../acceuil/enrepiseeditoffre/enrepiseeditoffre.component';
import { ProfilComponent } from '../acceuil/profil/profil.component';
import { AddprofilComponent } from '../acceuil/addprofil/addprofil.component';
import { EditcvComponent } from '../acceuil/editcv/editcv.component';
import { DemandeoffreComponent } from '../acceuil/demandeoffre/demandeoffre.component';
import { CondidatureComponent } from '../acceuil/condidature/condidature.component';

const routes: Routes = [
  { path: 'login', component: HomeComponent  },
  { path: 'registration', component: RegistrationComponent  },
  { path: 'Home', component: AcceuilComponent  },
  { path: 'AddOffre', component: EnrepiseaddoffreComponent  },
  { path: 'Home/:id', component: EnrepiseeditoffreComponent  },
  { path: 'profil', component: ProfilComponent  },
  { path: 'addprofil', component: AddprofilComponent  },
  { path: 'profil/:id', component: EditcvComponent  },
  { path: 'offre/:id', component: DemandeoffreComponent  },
  { path: 'condidature/:id', component: CondidatureComponent  },
  { path: '**', component: HomeComponent  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
