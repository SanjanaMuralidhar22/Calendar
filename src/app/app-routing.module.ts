import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesComponent } from './Components/packages/packages.component';
import { PackageActivationComponent } from './Components/package-activation/package-activation.component';
import { ClientComponent } from './Components/client/client.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [


{path:"booking",component:PackagesComponent},

  {path:"package-activation",component:PackageActivationComponent},

  {path:"client",component:ClientComponent},

  {path:"user",component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
