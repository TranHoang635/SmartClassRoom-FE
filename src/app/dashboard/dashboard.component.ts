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

    constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //quăng code javaScript đã được chuyển thành typeScript vào đây 👌
    // Chart.js
    var myChart = new Chart("myChart", {
      type: 'pie',
      data: {
          labels: ['Bình thường', 'Vắng mặt', 'Buồn ngủ', 'Ngủ gật', 'Không tập trung'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

    // Get the HTML element that displays the date
    var currentDateElement = document.getElementById("current-date");

    // Update the date every second
    setInterval(function() {
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
        greeting.textContent = 'Chào buổi sáng, Administrator!';
    } else if (currentHour < 18) {
        greeting.textContent = 'Chào buổi chiều, Administrator!';
    } else {
        greeting.textContent = 'Chào buổi tối, Administrator!';
    }



  }
}
