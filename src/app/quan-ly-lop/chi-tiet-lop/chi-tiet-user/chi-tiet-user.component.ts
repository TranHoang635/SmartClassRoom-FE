import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';

// export class Expertise {
//   loaiCB: number;
//   soLan: number;
// }

@Component({
  selector: 'app-chi-tiet-user',
  templateUrl: './chi-tiet-user.component.html',
  styleUrls: ['./chi-tiet-user.component.css']
})

export class ChiTietUserComponent implements OnInit {
  name = 'NhanDien';

  @Input('chiTietUserBuoi') 
    chitiet:any=[];

  @ViewChild('canvas', { static: true }) myCanvas!: ElementRef;

  ngOnInit(): void {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');
  
    if (context) {
      const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, '#FFC107');
      gradient.addColorStop(0.1, '#FFC107');
    
      gradient.addColorStop(0.1, '#DC3545');
      gradient.addColorStop(0.2, '#DC3545');
    
      gradient.addColorStop(0.2, '#C474F0');
      gradient.addColorStop(0.35, '#C474F0');
    
      gradient.addColorStop(0.35, 'purple');
      gradient.addColorStop(0.4, 'purple');
    
      gradient.addColorStop(0.4, '#28A745');
      gradient.addColorStop(0.8, '#28A745');
    
      gradient.addColorStop(0.8, '#28A745');
      gradient.addColorStop(1, '#28A745');
    
      gradient.addColorStop(1, 'purple');
    
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
    
  }
  
  

  // chartOptions = {
  //   animationEnabled: true,
  //   exportEnabled: false,
  //   // title:{
  //   //   text: "🍨ICE CREAM SALES🍨",
  //   //   fontFamily: "Calibri, Arial, sans-serif"
  //   // },
  //   axisX:{
  //     title: "",
  //     reversed: true
  //   },
  //   axisY:{
  //     suffix: "%"
  //   },
  //   toolTip:  {
  //     shared: true
  //   },
  //   data: [{
  //     type: "stackedBar100",
  //     name: "Blueberry",
  //     showInLegend: "true",
  //     yValueFormatString: "#,###'%'",
  //     color: "#5570b2",
  //     dataPoints: [
  //       {  y: 40.75, label: "Q1"}
  //     ]
  //   }, {
  //     type: "stackedBar100",
  //     name: "Vanilla",
  //     showInLegend: "true",
  //     yValueFormatString: "#,###'%'",
  //     color: "#f6d788",
  //     dataPoints: [
  //       {  y: 12.75, label: "Q1"}
  //     ]
  //   }, {
  //     type: "stackedBar100",
  //     name: "Chocolate",
  //     showInLegend: "true",
  //     yValueFormatString: "#,###'%'",
  //     color: "#8D5531",
  //     dataPoints: [
  //       {  y: 12.5, label: "Q1"}
  //     ]
  //   }, {
  //     type: "stackedBar100",
  //     name: "Strawberry",
  //     showInLegend: "true",
  //     yValueFormatString: "#,###'%'",
  //     color: "#c13c3c",
  //     dataPoints: [
  //       {  y: 34, label: "Q1"},
  //     ]
  //   }]
  // }	
    
}