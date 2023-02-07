import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private datePipe: DatePipe
  ) { }

  dateRangeForm: any = {
    checkin: this.datePipe.transform(new Date(), "yyyy-MM-dd"),
    checkout: this.datePipe.transform(new Date(), "yyyy-MM-dd")
  }

}
