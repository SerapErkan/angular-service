import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  connection = environment.api.nextjs.role + "/role";

  constructor(private http: HttpClient) { }

  getAllRoles() {
    // const apiUrl =this.connection +"/role" 
    return this.http.get<any>(this.connection);
    //{params}
    //{search:""}



  }
}
