import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private datePipe: DatePipe, private router: Router) {

  }


  dateRangeForm: any = {
    checkin: this.datePipe.transform(new Date(), "yyyy-MM-dd"),
    checkout: this.datePipe.transform(new Date(), "yyyy-MM-dd")
  }


  search_bookings(): void {
    console.log("ok");
    this.router.navigate(['bookings']);
  }

}
