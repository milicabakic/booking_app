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


  constructor(private apiService: ApiService, private router: Router) {
    this.name = "";
    this.surname = "";
    this.email = "";
    this.phone_number = "";
    this.username = "";
    this.password = "";
  }


  register_user() {
    if (!this.validateForm() || !this.checkPasswordMatching()) {
      return;
    }

    this.apiService.register(this.name, this.surname, this.email, this.phone_number,
                              this.username, this.password).subscribe( res => {
        this.router.navigate(['']);
      }, (error) => {
        alert("User with this username already exists!");
        this.resetData();
      }
    );
  }


  validateForm(): boolean {
    if (this.name == "" || this.surname == "" || this.phone_number == "" || this.email == "" ||
        this.password == "" || this.username == "") {
      alert('All fields are required!');
      return false;
    }
    return true;
  }


  checkPasswordMatching(): boolean {
    return true;
  }


  resetData() {
    this.name = "";
    this.surname = "";
    this.email = "";
    this.phone_number = "";
    this.username = "";
    this.password = "";
  }


  ngOnInit(): void {
  }

}
