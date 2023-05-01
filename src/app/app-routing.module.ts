import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [{
  path: 'Home',
  component: HomeComponent
},
{
  path: 'Create',
  component: CreateComponent
},
{
  path: '',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
