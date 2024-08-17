import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {environment} from "../enviroments/enviroments";
import {AngularFireModule} from "@angular/fire/compat";
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';





export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),  importProvidersFrom(AngularFireModule.initializeApp(environment.firebase)), provideFirebaseApp(() => initializeApp({"projectId":"project-angular-5276b","appId":"1:235010475347:web:f94aa5f1ac811c5184cda6","storageBucket":"project-angular-5276b.appspot.com","apiKey":"AIzaSyADOSrItccqsKq5x0XgY3DyOkxzZ_Um6Ic","authDomain":"project-angular-5276b.firebaseapp.com","messagingSenderId":"235010475347"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),

 ]
};
