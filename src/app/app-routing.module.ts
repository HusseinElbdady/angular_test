import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';
import {GallaryComponent} from './gallary/gallary.component'

const routes: Routes = [{path:'' ,component:HomeComponent},
                        {path:'about' , component:AboutComponent},
                        {path:'technews' , component:ContactsComponent},
                        {path:'sports' , component:GallaryComponent},
                        {path:"**" , component:HomeComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
