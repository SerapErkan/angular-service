import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

// interface role {
//   id:number;
//   name:string;
// }
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

  addRole(role:any){
    return this.http.post<any>(this.connection,role)
  }

  editRole(role:any){
    return this.http.put<any>(this.connection + `/${role.id}`,role)

  }

  deleteRole(role:any){
    return this.http.delete<any>(this.connection +`/${role.id}`,role)
  }
}
