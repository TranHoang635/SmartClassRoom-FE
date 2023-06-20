import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quan-ly-lop',
  templateUrl: './quan-ly-lop.component.html',
  styleUrls: ['./quan-ly-lop.component.css']
})
export class QuanLyLopComponent implements OnInit {

  constructor(private service:SharedService, private http: HttpClient,private router:Router) { }
  DsBuoiHoc:any=[]

  // phan trang
  title = 'phantrang';
  POSTS: any;
  page:number = 1;
  count:number = 0;
  tableSize: number = 10;
  tableSizes: any = [10,15,20,25,30];
 //!-- End Phan Trang 
 search:any // Search
 buoi:any=[];

  ngOnInit(): void {
    this.loadBuoiHoc();
  }
  loadBuoiHoc(){
    this.service.dsBuoiHoc().subscribe(data=>{
      this.DsBuoiHoc=data;
      console.log("ds buoi",data);
    })
  }
  // phan trang
  onTableDataChange (event: any){
    this.page = event;
    this.DsBuoiHoc();
  }
 onTableSizeChange(event:any):void{
  this.tableSize = event.target.value;
  this.page = 1;
  this.DsBuoiHoc();
 }

 chiTietBuoi(buoi:any){
    this.buoi=buoi; 
  }
  // !phan trang
  // Search
  Search(){
    if(this.search== ""){
      this.ngOnInit();
    }else{
      this.DsBuoiHoc = this.DsBuoiHoc.filter(res =>{
        return res.hoTen.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      })
    }
  }    
  vaoLop(id){
    console.log(id)
    this.router.navigate(['quan-ly-lop/chi-tiet-lop',id])
  }
  //! Search
}
