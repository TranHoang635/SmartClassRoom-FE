import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';
import * as signalR from '@microsoft/signalr';

//import {}
//import * as internal from 'stream';

@Component({
  selector: 'app-ds-users',
  templateUrl: './ds-users.component.html',
  styleUrls: ['./ds-users.component.css']
})

export class DsUsersComponent implements OnInit {

  constructor(private service:SharedService,   private http: HttpClient) { }
  loaiUser:any;
  DsLopHoc:any=[];
  DSUser:any=[];
  user:any=[];
  value:any;
  DsNotifi:any=[];

  // phan trang
  title = 'phantrang';
  POSTS: any;
  page:number = 1;
  count:number = 0;
  tableSize: number = 10;
  tableSizes: any = [10,15,20,25,30];
 //!-- End Phan Trang
 // Search
  search:any
 //!-- End Search

  ngOnInit(): void {
    const connection = new signalR.HubConnectionBuilder()  
    .configureLogging(signalR.LogLevel.Information)  
    .withUrl('https://localhost:44384/notify')  
    .build();  

    connection.start().then(function () {  
      console.log('SignalR Connected! ');  
    }).catch(function (err) {  
      return console.error(err.toString());  
    });  
    connection.on("BroadcastMessage", () => {  
      this.service.dsNotification().subscribe(data=>{  
        this.DsNotifi=data;
        console.log(this.DsNotifi); 
      });
      this.service.countNotification().subscribe(count =>{
        console.log(count);
      })
    });
      //console.log(location.pathname);
    if(this.value!=null){
      this.locLoaiUser(this.value);
    } else{
      this.reloadDSUser();
    }   
    this.loadLopHoc();
  }
  reloadDSUser(){
    this.service.dsUsers().subscribe(data=>{  
        this.DSUser=data;       
      console.log(data);
    })
  }
  locLoaiUser(value:any){ 
    console.log(value);   
    this.service.theoLoaiUser(value).subscribe(data=>{
      this.DSUser=data;
    })
  }
  chiTietUser(user:any){
    this.user=user;        
  }
  loadLopHoc(){
    this.service.dsLopHoc().subscribe(dataLopHoc =>{
      this.DsLopHoc=dataLopHoc;
    })
  }
  // phan trang
  onTableDataChange (event: any){
    this.page = event;
    this.DSUser();
  }
 onTableSizeChange(event:any):void{
  this.tableSize = event.target.value;
  this.page = 1;
  this.DSUser();
 }
  // !phan trang
  // Search
  Search(){
    if(this.search== ""){
      this.ngOnInit();
    }else{
      this.DSUser = this.DSUser.filter(res =>{
        return res.hoTen.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      })
    }
  }    
  //! Search

  //Xoa Tài Khoản
  xoaUser(idUser, hoten){
    if(confirm("Delete Tài Khoản: "+ hoten +" ? ")){
        this.service.deleteUser(idUser).subscribe(res=>{
          alert(res.toString());
        this.service.dsUsers().subscribe(data=>{
          this.DSUser=data;
        });
      })
    }
  }
}
