import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/libs';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"home",component:HomeComponent

  },
  {
    path:"map",
    loadChildren:()=>
    import("./map/map.module").then(m=>m.MapModule)
  },
  {
    path:"role",
    loadChildren:()=>
    import("./role/role.module").then(m=>m.RoleModule),canActivate:[AuthGuard]
    

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
