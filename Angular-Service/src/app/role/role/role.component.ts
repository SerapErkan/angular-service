import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RoleService } from 'src/libs';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.sass']
})
export class RoleComponent implements OnInit, OnDestroy {

  rolesData: any;
  subs1: Subscription | undefined;
  constructor(private RoleService: RoleService) { }

  ngOnInit(): void {
    this.getRoles();
  }
  ngOnDestroy(): void {
    this.subs1?.unsubscribe();
  }


  getRoles() {
    this.subs1 = this.RoleService.getAllRoles().subscribe(data => {
      this.rolesData = data;
    });

  }
  addNewRole(roleForm: NgForm) {
    this.RoleService.addRole(roleForm.value).subscribe(data => {
      this.getRoles();
    }, errors => {
      alert("something went wrong !!");
    })

  }

  editNewRole(roleForm: NgForm) {
    this.RoleService.editRole(roleForm.value).subscribe(data => {
      this.getRoles();
    }, errors => {
      alert("something went wrong !!");
    });
  }
 deleteNewRole(roleForm: NgForm) {
    this.RoleService.deleteRole(roleForm.value).subscribe(data => {
      this.getRoles();
    }, errors => {
      alert("something went wrong !!");
    });
  }

}



