import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component'
import  {FormComponent} from './form/form.component'


export const ROUTES: Routes =[
  {path:'', component:HomeComponent},
  {path:'form', component:FormComponent}
]
