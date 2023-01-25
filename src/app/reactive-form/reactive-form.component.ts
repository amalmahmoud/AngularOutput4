import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {


  reactiveForm:FormGroup;

  ngOnInit()
  {
    //We have created our form 
    this.reactiveForm = new FormGroup({
     firstname: new FormControl (null),
     lastname: new FormControl (null),
     email: new FormControl (null),
     gender: new FormControl ('male'),
     country: new FormControl ('india'),
     hobbies: new FormControl (null),
    });
  }
  onSubmit()
  {
    console.log(this.reactiveForm)
  }
}
