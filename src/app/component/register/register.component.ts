import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  surname: string;
  email: string;
  phone_number: string
  username: string;
  password: string;
  repeated_password: string;


  constructor(private apiService: ApiService, private router: Router) {
    this.name = "";
    this.surname = "";
    this.email = "";
    this.phone_number = "";
    this.username = "";
    this.password = "";
    this.repeated_password = "";
  }


  register_user() {
    if (!this.validateForm() || !this.checkPasswordMatching()) {
      return;
    }

    this.apiService.register(this.name, this.surname, this.email, this.phone_number,
                              this.username, this.password).subscribe( res => {
        this.apiService.username = this.username;
        this.router.navigate(['']);
      }, (error) => {
        alert("User with this username already exists!");
        this.resetData();
      }
    );

  }


  validateForm(): boolean {
    if (this.name == "" || this.surname == "" || this.phone_number == "" || this.email == "" ||
        this.password == "" || this.repeated_password == "" || this.username == "") {
      alert('All fields are required!');
      return false;
    }
    return true;
  }


  checkPasswordMatching(): boolean {
    if (this.password === this.repeated_password) {
      return true;
    }
    return false;
  }


  resetData() {
    this.name = "";
    this.surname = "";
    this.email = "";
    this.phone_number = "";
    this.username = "";
    this.password = "";
    this.repeated_password = "";
  }


  ngOnInit(): void {
  }

}
