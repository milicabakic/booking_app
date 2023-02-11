import {Component, OnInit} from '@angular/core';
import {JWT} from "../../model";
import {ApiService} from "../../service/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  response: JWT = {
    jwt: ""
  }


  constructor(private apiService: ApiService, private router: Router) {
    this.username = "";
    this.password = "";
  }

  submit() {
    if(! this.validateForm()) {
      return;
    }

    this.apiService.login(this.username, this.password).subscribe( res => {
        this.response = res;
        this.setJwt();
        this.router.navigate(['']);
      }, (error) => {
        alert("Bad credentials");
        localStorage.clear();
      }
    );
  }

  validateForm(): boolean {
    if (this.password == "" || this.username == "") {
      alert('All fields are required!');
      return false;
    }
    return true;
  }


  setJwt() {
    localStorage.setItem("jwt", this.response.jwt);
    // const payload = JSON.parse(atob(this.response.jwt.split('.')[1]));
    // localStorage.setItem("username", payload.sub);
  }

  ngOnInit(): void {
  }

}
