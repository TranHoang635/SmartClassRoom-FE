import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chart: any;
  chartOptions: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Get the HTML element that displays the date
    var currentDateElement = document.getElementById("current-date");
    // Update the date every second
    setInterval(function () {
      // Get the current date and time
      var currentDate = new Date();

      // Format the date as "Month day, year"
      var formattedDate = currentDate.toLocaleDateString("vi-VN", {
        month: "long",
        day: "numeric",
        year: "numeric"
      });

      // Update the HTML element with the new date
      currentDateElement.innerHTML = "Hôm nay, " + formattedDate;
    }, 1000);

    const greeting = document.getElementById('greeting');
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    if (currentHour < 12) {
      greeting.textContent = 'Chào buổi sáng, Phạm Gia Khiêm!';
    } else if (currentHour < 18) {
      greeting.textContent = 'Chào buổi chiều, Phạm Gia Khiêm!';
    } else {
      greeting.textContent = 'Chào buổi tối, Phạm Gia Khiêm!';
    }
  }
}
