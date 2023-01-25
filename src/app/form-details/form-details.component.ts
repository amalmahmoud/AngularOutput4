import { FormService } from './../Services/form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit{
  formdata:any;
 constructor(private formService:FormService) {
 }
 ngOnInit() {
  this.formService.getData().subscribe(data => {
      console.log('form data ', data);
      this.formdata=data
  });
}


}
