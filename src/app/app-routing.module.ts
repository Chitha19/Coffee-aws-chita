import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import{ MyFormComponent } from './my-form/my-form.component';
import { DirectivetestComponent } from './directivetest/directivetest.component';
import { GreetComponent } from './component/greet/greet.component';
import { FriendComponent } from './friend/friend.component';
import { CoffeeshopComponent } from './component/coffeeshop/coffeeshop.component';

const routes: Routes =[
  {path:'Myform',component: MyFormComponent},
  {path:'Directivetest',component: DirectivetestComponent},
  {path:'Binding',component: GreetComponent },
  {path:'Frienddata',component: FriendComponent },
  {path:'Coffee',component:CoffeeshopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
