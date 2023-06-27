import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ds-link-tailieu',
  templateUrl: './ds-link-tailieu.component.html',
  styleUrls: ['./ds-link-tailieu.component.css']
})
export class DsLinkTailieuComponent implements OnInit {

  constructor(private service: SharedService, private router: Router) { }

  DsTaiLieu:any=[];
  tailieu:any=[];
  search: any;
  value:any;

  // phan trang
  title = 'phantrang';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;


  ngOnInit(): void {
    this.loadTaiLieu();
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
    console.log(this.page);
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

  suaTaiLieu(tlieu: any) {
    this.tailieu = tlieu;
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
