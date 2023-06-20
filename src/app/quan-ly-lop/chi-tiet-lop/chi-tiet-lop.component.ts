import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';
import * as signalR from '@microsoft/signalr';


export class Expertise {
  loaiCB: number;
  soLan: number;
  time:number;
  tongTime:number
}

@Component({
  selector: 'app-chi-tiet-lop',
  templateUrl: './chi-tiet-lop.component.html',
  styleUrls: ['./chi-tiet-lop.component.css']
})
export class ChiTietLopComponent implements OnInit {
  strIntoObj: Expertise[];
  val:any;
  buoiHoc:any=[];
  DsContect:any=[];
  isConnect = false;
  NhanDienUser:any=[];
 // phan trang
 title = 'phantrang';
 POSTS: any;
 page:number = 1;
 count:number = 0;
 tableSize: number = 10;
 tableSizes: any = [10,15,20,25,30];
 canhBao:number;

//!-- End Phan Trang
  constructor(public route:ActivatedRoute, public router:Router, 
    public service:SharedService,private http: HttpClient) { }

  ngOnInit(): void {
    let sub = this.route.params.subscribe(params =>{
      this.val = params['id'];
    })
    this.service.chiTietQlLop(this.val).subscribe(data =>{
      this.buoiHoc = data;    
    })
    this.getDsNhanDien(this.val);
    this.getClassOf(this.DsContect.IdCanhBao);

    //============SignalR==============================================
    if(this.val!=null){
      const connection = new signalR.HubConnectionBuilder()
        .configureLogging(signalR.LogLevel.Information)  
        .withUrl('http://localhost:55907/detect')  
        .withAutomaticReconnect([0, 1, 3,5,10,13,15000,18000,21000,30000])
        .build();
      connection.start().then(function () {  
          console.log('SignalR Connected! '); 
        }).catch(function (err) {  
          return console.error(err.toString());  
        });
      connection.on("BroadcastMessage", () => {  
        this.getDsNhanDien(this.val);
        console.log("-->",this.DsContect);
        });
      } 
    }; 
    //End================================
    getDsNhanDien(val:any){
      this.service.dsNhanDien(val).subscribe(data=>{  
        this.DsContect=data;
      })
    }
    getClassOf(canhBao) {
      console.log("jkpghjjslkjgfsl",canhBao);
      if (canhBao > 1 ) {
        return 'btn btn-danger';
      } else {
        return 'btn btn-primary' 
      }
    }
    chiTietNhanDienUser(nhandienval:string){
      let str: string = nhandienval;
      this.strIntoObj = JSON.parse(str);
      console.log(this.strIntoObj);
    }

  
}

  
