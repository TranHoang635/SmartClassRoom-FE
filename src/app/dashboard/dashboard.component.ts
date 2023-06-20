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
    // Chart.js

    this.chartOptions = {
      theme: 'light2',
      title:{
        text: "Biểu đồ mức độ tập trung"
      },
      animationEnabled: true,
      axisY:{
        title: "⠀",
        suffix: "%"
      },
      legend :{
        horizontalAlign: 'center',
        verticalAlign: 'bottom'
      },
      toolTip: {
        shared: true
      },
      data:[{        
      //   type: "stackedBar100",
      //   showInLegend: true, 
      //   color: "#BBDEFB",
      //   name: "Tập trung",
      //   indexLabel: "#percent%",
      //   toolTipContent: "<b>{label}</b><br/><span>{name}:</span> #percent%",
      //   dataPoints: [
      //     { y: 320, label: "Phạm Gia Khiêm" },
      //     { y: 300, label: "Trần Duy Hoàng" },
      //     { y: 400, label: "Nguyễn Văn Huy Hoàng" },
      //     { y: 220, label: "Võ Hoàng Huy" }
      //   ]
      // },
      //{        
        type: "stackedBar100",
        showInLegend: true, 
        name: "Bình thường",
        color: "#25D366",
        indexLabel: "#percent%",
        toolTipContent: "<b>{label}</b><br/><span>{name}:</span> #percent%",
        dataPoints: [
          { y: 100, label: "Cơ sở dữ liệu" },
          { y: 150, label: "Toán rời rạc" },
          { y: 100, label: "Lập trình Hướng DT" },
          { y: 150, label: "Web mã nguồn mở" }
        ]
      },
      {// Không tập trung
        type: "stackedBar100",
        showInLegend: true, 
        name: "Không tập trung",
        color: "#FF0000",
        indexLabel: "#percent%",
        toolTipContent: "{name}: #percent%",
        dataPoints: [
          { y: 150},
          { y: 150},
          { y: 150},
          { y: 150}
        ]
      },
      {// Buồn ngủ
        type: "stackedBar100",
        showInLegend: true, 
        name: "Buồn ngủ",
        color: "#FFD700",
        indexLabel: "#percent%",
        toolTipContent: "{name}: #percent%",
        dataPoints: [
          { y: 100},
          { y: 160},
          { y: 150},
          { y: 130}
        ]
      },
      {// Ngủ gật 
        type: "stackedBar100",
        showInLegend: true, 
        name: "Ngủ gật",
        color: "PINK",
        indexLabel: "#percent%",
        toolTipContent: "{name}: #percent%",
        dataPoints: [
          { y: 180},
          { y: 150},
          { y: 120},
          { y: 150}
        ]
      },
      {// Vắng mặt  
        type: "stackedBar100",
        showInLegend: true, 
        name: "Vắng mặt",
        color: "#424242",
        indexLabel: "#percent%",
        toolTipContent: "{name}: #percent%",
        dataPoints: [
          { y: 150, label: "Cơ sở dữ liệu" },
          { y: 100, label: "Toán rời rạc" },
          { y: 150, label: "Lập trình hướng DT" },
          { y: 100, label: "Mạng máy tính " }
        ]
      }]
    }	

    
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
      greeting.textContent = 'Chào buổi sáng, Administrator!';
    } else if (currentHour < 18) {
      greeting.textContent = 'Chào buổi chiều, Administrator!';
    } else {
      greeting.textContent = 'Chào buổi tối, Administrator!';
    }
  }
}
