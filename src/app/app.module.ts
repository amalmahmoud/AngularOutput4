import { FormService } from './Services/form.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormDetailsComponent } from './form-details/form-details.component'
import { Routes,RouterModule } from '@angular/router';

const appRoute:Routes = [
  {path:'' , component:ReactiveFormComponent},
  {path:'form' , component:ReactiveFormComponent},
  {path:'details' , component:FormDetailsComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    FormDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute),

  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
