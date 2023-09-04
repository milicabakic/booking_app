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
  username: string;
  provider: boolean;

  constructor(private httpClient:HttpClient) {
    this.username = "";
    this.provider = false;
  }

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

  provider_login(username: string, password: string): Observable<JWT> {
    return this.httpClient.post<JWT>(`${this.apiUrl}/auth/provider/login`,{
      "username":username,
      "password":password
    });
  }

  // search_facilities(destination: string): Observable<ServiceFacility> {
  //   return this.httpClient.get()
  // }
}
