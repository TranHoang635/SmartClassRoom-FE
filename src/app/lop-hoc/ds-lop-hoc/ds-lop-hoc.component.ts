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
    private service:SharedService,
    private activatedRoute: ActivatedRoute ) { }

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
      this.activatedRoute.queryParams.subscribe(params => {
        const id = params['id'];
        console.log(id);
      });
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

    editLopHoc(id){
      this.router.navigateByUrl("home/lop-hoc/edit-lop-hoc/"+id);
    }
    deleteLopHoc(id, maLop){
      if(confirm("Xóa Lớp: "+ maLop +" ? ")){
          this.service.delete(id).subscribe(res=>{
            alert(res.toString());
          this.service.dsLopHoc().subscribe(data=>{
            this.DsLopHoc=data;
          });
        })
      }
    }

}
