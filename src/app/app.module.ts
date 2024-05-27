import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    provideFirebaseApp(() => initializeApp({"projectId":"fir-hostingutn-3e7da","appId":"1:728431990795:web:d6d0dca3797bdd1de30f0e","storageBucket":"fir-hostingutn-3e7da.appspot.com","apiKey":"AIzaSyAv-J6JcTLXEGy_j8XcEK5BQ3Wn2jXNZX8","authDomain":"fir-hostingutn-3e7da.firebaseapp.com","messagingSenderId":"728431990795"})), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()), 
    provideDatabase(() => getDatabase()), 
    provideStorage(() => getStorage())],
  bootstrap: [AppComponent],
})
export class AppModule {}
