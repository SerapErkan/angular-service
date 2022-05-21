import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role/role.component';
import { RoleService } from 'src/libs/services/role.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RoleComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    FormsModule
  ],
  providers:[RoleService]
  
})
export class RoleModule { }
