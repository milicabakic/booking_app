import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JWT, ServiceFacility, User} from "../model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl = environment.backendApi;

  constructor(private httpClient:HttpClient) { }

  login(username: string, password: string): Observable<JWT> {
    return this.httpClient.post<JWT>(`${this.apiUrl}/auth/user/login`,{
      "username":username,
      "password":password
    });
  }

  register(name: string, surname: string, email: string, phone_number: string,
           username: string, password: string): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}/auth/user/register`,{
      "firstName": name,
      "lastName": surname,
      "email": email,
      "phoneNumber": phone_number,
      "username": username,
      "password": password
    });
  }

  // search_facilities(destination: string): Observable<ServiceFacility> {
  //   return this.httpClient.get()
  // }
}
