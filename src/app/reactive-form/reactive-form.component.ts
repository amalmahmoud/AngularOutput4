import { FormService } from './../Services/form.service';
import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormArray, Form } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  reactiveForm:FormGroup;
  formStatus:any;
  constructor(private formService:FormService,private router:Router){

  }
  ngOnInit()
  {
    //We have created our form 
    this.reactiveForm = new FormGroup({
     firstname: new FormControl (null,[Validators.required,this.noSpaceAllowed]),
     lastname: new FormControl (null,[Validators.required,this.noSpaceAllowed]),
     email: new FormControl (null,[Validators.required,Validators.email]),
     age:new FormControl(null,Validators.min(16)),
     gender: new FormControl ('male'),
     country: new FormControl ('india'),
     hobbies: new FormControl (null),
     skills:new FormArray([
 
      new FormControl(null,Validators.required)


     ])
    });

    // this.reactiveForm.valueChanges.subscribe((value) =>{
    //  console.log(value);
    // })

    this.reactiveForm.statusChanges.subscribe((value) => {
      console.log(value)
      this.formStatus=value;   
    })
    // setTimeout(()=> {
    //   this.reactiveForm.patchValue({
    //     firstname:"amal"
    //    });
    // },3000)
  }
  onSubmit()
  {


    this.formService.setData( { firstname: this.reactiveForm.get('firstname').value,
    lastname:this.reactiveForm.get('lastname').value,
    age:this.reactiveForm.get('age').value,
    email:this.reactiveForm.get('email').value,
    country:this.reactiveForm.get('country').value
  });
    this.router.navigate(['details'])
    console.log(this.reactiveForm)
    if(this.formStatus === 'VALID')
    {
    this.reactiveForm.reset({
      firstname:'',
      lastname: '',
      email: '',
      age:'',
      gender: 'male',
      country: 'india',
      hobbies:'',
      skills:[]
    });
    }

  }

  addSkills()
  {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null,Validators.required))
  }
  noSpaceAllowed(control: FormControl)
  {
    if(control.value != null && control.value.indexOf(' ') != -1)
    {
      return {noSpaceAllowed:true}
    }
    return null;
  }
}
