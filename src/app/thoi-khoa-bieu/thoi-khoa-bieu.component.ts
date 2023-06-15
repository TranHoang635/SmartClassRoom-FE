import { Component, OnInit } from '@angular/core';
import { CalendarOption } from '@fullcalendar/angular/private-types';
// import { CalendarOptions } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-thoi-khoa-bieu',
  templateUrl: './thoi-khoa-bieu.component.html',
  styleUrls: ['./thoi-khoa-bieu.component.css']
})
export class ThoiKhoaBieuComponent implements OnInit {
  // calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth'
  // };
  constructor() { }

  ngOnInit(): void {
  }

}
