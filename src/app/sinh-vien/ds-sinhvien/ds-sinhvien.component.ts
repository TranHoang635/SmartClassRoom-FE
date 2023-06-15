import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-ds-sinhvien',
  templateUrl: './ds-sinhvien.component.html',
  styleUrls: ['./ds-sinhvien.component.css']
})
export class DsSinhvienComponent implements OnInit {

  constructor(private service: SharedService, private http: HttpClient) { }
  loaiUser: any;
  DsLopHoc: any = [];
  DSUser: any = [];
  user: any = [];
  value: any;
  DsNotifi: any = [];

  // phan trang
  title = 'phantrang';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [10, 15, 20, 25, 30];
  //!-- End Phan Trang
  // Search
  search: any
  //!-- End Search

  ngOnInit(): void {

    if (this.value !== 3) { // nếu loaiuser khác 4 thì gán value = 4 và tải lại danh sách
      this.value = 3;
      this.locLoaiUser(this.value);
    } else { // nếu loaiuser đã bằng 4 thì tải lại danh sách
      this.reloadDSUser();
    }

    this.loadLopHoc();

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
      this.service.dsNotification().subscribe(data => {
        this.DsNotifi = data;
        console.log(this.DsNotifi);
      });
      this.service.countNotification().subscribe(count => {
        console.log(count);
      })
    });
    //console.log(location.pathname);
    if (this.value != null) {
      this.locLoaiUser(this.value);
    } else {
      this.reloadDSUser();
    }
    this.loadLopHoc();
  }
  reloadDSUser() {
    this.service.dsUsers().subscribe(data => {
      this.DSUser = data;
      console.log(data);
    })
  }
  locLoaiUser(value: any) {
    console.log(value);
    this.service.theoLoaiUser(value).subscribe(data => {
      this.DSUser = data;
    })
  }
  chiTietUser(user: any) {
    this.user = user;
  }
  loadLopHoc() {
    this.service.dsLopHoc().subscribe(dataLopHoc => {
      this.DsLopHoc = dataLopHoc;
    })
  }
  // phan trang
  onTableDataChange(event: any) {
    this.page = event;
    this.DSUser();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.DSUser();
  }
  // !phan trang
  // Search
  Search() {
    if (this.search == "") {
      this.ngOnInit();
    } else {
      this.DSUser = this.DSUser.filter(res => {
        return res.hoTen.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      })
    }
  }
  //! Search
  //Xoa Tài Khoản
  disableUser(id, hoten) {
    if (confirm("Disable Tài Khoản: " + hoten + "? ")) {
      this.service.disableUser(id).subscribe(res => {
        alert(res.toString());
        this.service.dsUsers().subscribe(data => {
          this.DSUser = data;
        });
      })
    }
  }

}
