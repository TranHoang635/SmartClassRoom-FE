import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ds-lop-hoc',
  templateUrl: './ds-lop-hoc.component.html',
  styleUrls: ['./ds-lop-hoc.component.css']
})
export class DsLopHocComponent implements OnInit {

  constructor (
    private router:Router,
    private service:SharedService ) { }

  DsLopHoc:any=[];

    // phan trang
    title = 'phantrang';
    POSTS: any;
    page:number = 1;
    count:number = 0;
    tableSize: number = 10;
   //!-- End Phan Trang

   //search
    search:any;
   //search

    ngOnInit(): void {
      this.reloadDsLopHoc();
    }
    reloadDsLopHoc(){
      this.service.dsLopHoc().subscribe(data=>{
        this.DsLopHoc=data;
      })
    }

    // Phân trang
    onTableDataChange (event: any){
      this.page = event;
      this.reloadDsLopHoc();
      console.log(this.page);
    }
    onTableSizeChange(event:any):void{
      this.tableSize = event.target.value;
      this.page = 1;
      this.reloadDsLopHoc();
    }
    Search(){
      if(this.search== ""){
        this.ngOnInit();
      }else{
        this.DsLopHoc = this.DsLopHoc.filter(res =>{
          return res.maLopHoc.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
        })
      }
    }

    suaLopHoc(id){
      this.router.navigateByUrl("home/lop-hoc/edit-lop-hoc/"+id);
    }
    xoaLopHoc(id, maLop){
      if(confirm("Xóa Lớp: "+ maLop +" ? ")){
          this.service.xoaLopHoc(id).subscribe(res=>{
            alert(res.toString());
          this.service.dsLopHoc().subscribe(data=>{
            this.DsLopHoc=data;
          });
        })
      }
    }

}
