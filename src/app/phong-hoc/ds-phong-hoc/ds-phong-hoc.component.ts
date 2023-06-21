import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ds-phong-hoc',
  templateUrl: './ds-phong-hoc.component.html',
  styleUrls: ['./ds-phong-hoc.component.css']
})
export class DsPhongHocComponent implements OnInit {

  constructor(private service: SharedService, private router: Router) { }

  DsPhongHoc: any = [];

  // phan trang
  title = 'phantrang';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  //!-- End Phan Trang

  //search
  search: any;
  //search

  ngOnInit(): void {
    this.reloadDsPhongHoc();
  }
  reloadDsPhongHoc(){
    this.service.dsPhongHoc().subscribe(data=>{
      this.DsPhongHoc=data;
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

  

  editPhongHoc(idPhongHoc){
    this.router.navigate(['phong-hoc/edit-phong-hoc',idPhongHoc])
  }

  deletePhongHoc(id){
    if(confirm("Xóa Phòng: "+ id +"? ")){
        this.service.delete(id).subscribe(res=>{
          alert(res.toString());
        this.service.dsLopHoc().subscribe(data=>{
          this.DsPhongHoc=data;
        });
      })
    }
  }

}
