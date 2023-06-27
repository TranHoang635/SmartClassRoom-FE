import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ds-link-tailieu',
  templateUrl: './ds-link-tailieu.component.html',
  styleUrls: ['./ds-link-tailieu.component.css']
})
export class DsLinkTailieuComponent implements OnInit {

  constructor(
    private service: SharedService,
    private http: HttpClient,
    private router: Router) { }

  DsTaiLieu:any=[];
  taiLieu:any=[];
  search: any;

  // phan trang
  title = 'phantrang';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;


  ngOnInit(): void {
    this.loadTaiLieu();
    console.log("tai ----->",this.taiLieu);
  }
  loadTaiLieu() {
    this.service.dsTaiLieu().subscribe(data=>{
      this.DsTaiLieu=data;
      console.log("ds tailieu",data);
    })
  }
  // Phân trang
  onTableDataChange(event: any) {
    this.page = event;
    this.DsTaiLieu();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.DsTaiLieu();
  }
  //End-Phân trang
  Search() {
    if (this.search == "") {
      this.ngOnInit();
    } else {
      this.DsTaiLieu = this.DsTaiLieu.filter(res => {
        return res.maTaiLieu.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      })
    }
  }


  chiTietTaiLieu(taiLieu:any){
    this.taiLieu = taiLieu;   
    // console.log("???",taiLieu);
  }

  //Xoa Tài Lieu
  xoaTaiLieu(id, tenTaiLieu) {
    if (confirm("Xóa Tài Liệu: " + tenTaiLieu + " ? ")) {
      this.service.xoaTaiLieu(id).subscribe(res => {
        alert(res.toString());
        this.service.dsTaiLieu().subscribe(data => {
          this.DsTaiLieu = data;
        });
      })
    }
  }

}
