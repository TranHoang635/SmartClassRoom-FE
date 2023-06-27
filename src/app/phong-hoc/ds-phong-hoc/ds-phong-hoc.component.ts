import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-phong-hoc',
  templateUrl: './ds-phong-hoc.component.html',
  styleUrls: ['./ds-phong-hoc.component.css']
})
export class DsPhongHocComponent implements OnInit {

  constructor(private service: SharedService) { }

  DsPhongHoc: any = [];
  phong:any=[];
  search:any;
  value:any;


  // phan trang
  title = 'phantrang';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  //!-- End Phan Trang


  ngOnInit(): void {
    this.loadPhongHoc();
  }
  loadPhongHoc(){
    this.service.dsPhongHoc().subscribe(data=>{
      this.DsPhongHoc=data;
      console.log("ds phong",data);
    })
  }

  // Phân trang
  onTableDataChange (event: any){
    this.page = event;
    this.DsPhongHoc();
    console.log(this.page);
  }
  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page = 1;
    this.DsPhongHoc();
  }
  Search(){
    if(this.search== ""){
      this.ngOnInit();
    }else{
      this.DsPhongHoc = this.DsPhongHoc.filter(res =>{
        return res.maPhongHoc.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      })
    }
  }
  // Phân trang và search


  chiTietPhong(phong:any){
   this.phong = phong;
  }
  xoaPhongHoc(id, tenPhongHoc){
    if(confirm("Xóa Phòng: "+ tenPhongHoc +"? ")){
        this.service.xoaPhongHoc(id).subscribe(res=>{
          alert(res.toString());
        this.service.dsPhongHoc().subscribe(data=>{
          this.DsPhongHoc=data;
        });
      })
    }
  }

}
