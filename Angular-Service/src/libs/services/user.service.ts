import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  isLoggedIn = true;
  connection = environment.api.nextjs.role;
  constructor(private http: HttpClient) { }


//   getAllUsers() {
//     return this.http.get<any>(this.connection + "/user");
//   }


//   login() {
//     const user = {
//       email: "ahmetaydin@udemy.com.tr",
//       password:"11111"
//     }
//     return this.http.post<any>(this.connection + "/login", user);
//   }


//   getToken() {
//     const token = localStorage.getItem("token");
//     if (token) {

//       return token
//     } else {
//       return this.login().subscribe(data => {
//         localStorage.setItem("token", data.value);
//         this.getToken();
//       });

//     }

//   }


// }

getAllUsers() {
  return this.http.get<any>(this.connection + "/user");
}

login() {
  const user = {
    email: "ahmetaydin@udemy.com.tr",
    password: "11111"
  };
  return this.http.post<any>(this.connection + "/login", user);
}

logOut() {
  localStorage.removeItem("token");
}

getToken() :any {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    this.login().subscribe(data => {
      localStorage.setItem("token", data.value);
      this.getToken();
    });
  }
}
}


