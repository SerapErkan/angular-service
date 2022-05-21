import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  connection=environment.api.nextjs.role;

  constructor(private http:HttpClientModule) { }
}
