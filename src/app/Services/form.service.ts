import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

   public formData = new BehaviorSubject<any>([]);
  

  setData(data:any) {
     this.formData= new BehaviorSubject ( data);
  }

  getData() {
    console.log(this.formData)
     return this.formData.asObservable();
  }
}
