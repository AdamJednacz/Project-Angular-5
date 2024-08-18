import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {map, Observable} from "rxjs";

export interface Data{
  firstName:string,
  lastName:string,
  date:string,
  color:string
}
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private db: AngularFireDatabase) {}

  saveFormData(formData: any) {
    return this.db.list('/formData').push(formData);
  }
  getContentData(): Observable<Data | null> {
    return this.db.list<Data>('/formData', ref => ref.limitToLast(1))
      .snapshotChanges()
      .pipe(
        map(changes => {
          const data = changes[0]?.payload.val();
          return data ? (data as Data) : null;
        })
      );
  }
}
