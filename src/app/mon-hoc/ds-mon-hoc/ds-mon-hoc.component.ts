import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ds-mon-hoc',
  templateUrl: './ds-mon-hoc.component.html',
  styleUrls: ['./ds-mon-hoc.component.css']
})
export class DsMonHocComponent implements OnInit {

  DsMonHoc:any=[];
  mon:any=[];
  DsLopHoc:any=[];
  DsGiaoVien:any=[];
  loaiUser:number = 2;
  value:any;
   // Search
   search:any
   //!-- End Search
   constructor(private service:SharedService, private router:Router) { }
      // phan trang
      title = 'phantrang';
      POSTS: any;
      page:number = 1;
      count:number = 0;
      tableSize: number = 10;
      tableSizes: any = [10,15,20,25,30];
     //!-- End Phan Trang


  ngOnInit(): void {
    if(this.value!=null){
      console.log("loc");
      this.locTinhTrang(this.value);
    } else{
      this.dsMonHoc();
    }   
    this.loadLopHoc(); 
    console.log(this.DsMonHoc);
  }
  dsMonHoc(){
    this.service.dsMonHoc().subscribe(data=>{
      this.DsMonHoc=data;
    })
  }
  chiTietMon(mon:any){
    this.mon = mon;    
  }

  // Phân trang
  onTableDataChange (event: any){
    this.page = event;
    this.dsMonHoc();
  }
  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page = 1;
    this.dsMonHoc();
  }
  loadLopHoc(){
    this.service.dsLopHoc().subscribe(dataLopHoc =>{
      this.DsLopHoc=dataLopHoc;
    })
  }
  Search(){
    if(this.search== ""){
      this.ngOnInit();
    }else{
      this.DsMonHoc = this.DsMonHoc.filter(res =>{
        return res.tenMonHoc.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      })
    }
  }    
  //! Search
  locTinhTrang(value:any){ 
    console.log(value);   
    this.service.theoTinhTrang(value).subscribe(data=>{
      this.DsMonHoc=data;
    })
  }

    //Xoa Tài Khoản
    xoaMonhoc(idMonHoc, tenMonHoc){
      if(confirm("Delete môn: "+ tenMonHoc +" ? ")){
          this.service.deleteMonHoc(idMonHoc).subscribe(res=>{
            alert(res.toString());
          this.service.dsMonHoc().subscribe(data=>{
            this.DsMonHoc=data;
          });
        })
      }
    }
}
