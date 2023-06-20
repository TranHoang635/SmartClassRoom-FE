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
      context.strokeStyle = 'red';
      context.fillStyle = 'rgba(17, 0, 255, 0.5)';
      this.#drawRectangle(context);
    }
    console.log("test: ",this.chitiet);
  }
  
  #drawRectangle(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.strokeStyle = "red";
    context.fillStyle = "red";
    context.fill();
    context.rect(13, 0, 16, 30);  
    context.stroke();
  }
    
}