import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/libs';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.sass']
})
export class RoleComponent implements OnInit {

  rolesData: any;
  constructor(private RoleService: RoleService) {}

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this.RoleService.getAllRoles().subscribe(data => {
      this.rolesData = data;
    });

  }

}
