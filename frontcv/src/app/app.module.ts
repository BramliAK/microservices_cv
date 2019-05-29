import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NavComponent } from './acceuil/nav/nav.component';
import { OffreComponent } from './acceuil/offre/offre.component';
import { EnrepiseoffreComponent } from './acceuil/enrepiseoffre/enrepiseoffre.component';
import { EnrepiseaddoffreComponent } from './acceuil/enrepiseaddoffre/enrepiseaddoffre.component';
import { EnrepiseeditoffreComponent } from './acceuil/enrepiseeditoffre/enrepiseeditoffre.component';
import { ProfilComponent } from './acceuil/profil/profil.component';
import { AddprofilComponent } from './acceuil/addprofil/addprofil.component';
import { EditcvComponent } from './acceuil/editcv/editcv.component';
import { DemandeoffreComponent } from './acceuil/demandeoffre/demandeoffre.component';
import { CondidatureComponent } from './acceuil/condidature/condidature.component';
import { DetailComponent } from './acceuil/detail/detail.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    HomeComponent,
    RegistrationComponent,
    AcceuilComponent,
    NavComponent,
    OffreComponent,
    EnrepiseoffreComponent,
    EnrepiseaddoffreComponent,
    EnrepiseeditoffreComponent,
    ProfilComponent,
    AddprofilComponent,
    EditcvComponent,
    DemandeoffreComponent,
    CondidatureComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    PdfViewerModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
