import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-lop-hoc',
  templateUrl: './edit-lop-hoc.component.html',
  styleUrls: ['./edit-lop-hoc.component.css']
})
export class EditLopHocComponent implements OnInit {

  editLopHoc: FormGroup;
  MaLopHoc:string;
  NgayBatDau:any;
  data:any;

  constructor(public route:ActivatedRoute, public router:Router, 
    public service:SharedService, private fb:FormBuilder ) { 
      this.editLopHoc = fb.group({
        MaLopHoc: new FormControl(),
        NgayBatDau: new FormControl(),
      })
    }

  val:any;
  lopHoc:any=[];
  DsSinhVien:any=[];
  idUser:any=null;
  idLopHoc:number;
  hoten:string;
  DsChuaAdd:any=[];
  id:number;
  idLop:number;
    // phan trang
    title = 'phantrang';
    POSTS: any;
    page:number = 1;
    count:number = 0;
    tableSize: number = 10;
    tableSizes: any = [10,15,20,25,30];
   //!-- End Phan Trang
    // phan trang
    tableSize2: number = 10;
    tableSizes2: any = [5,10,15,20,25,30];
  //!-- End Phan Trang

  ngOnInit(): void {
    let sub = this.route.params.subscribe(params =>{
      this.val = params['id'];
    })
    this.service.chiTietLopHoc(this.val).subscribe(data =>{
      this.lopHoc = data;      
    })
    this.service.theoLopHoc(this.val).subscribe(data=>{
      this.DsSinhVien = data;
    })
  }
  // phan trang
  onTableDataChange (event: any){
    this.page = event;
    this.DsSinhVien();
  }
  onTableSizeChange(event:any):void{    
    this.tableSize = event.target.value;
    this.page = 1;
    this.DsSinhVien();
  }
  // !phan trang
  
   // phan trang 2
   onTableDataChange2 (event: any){
    this.page = event;
    this.DsChuaAdd();
  }
  onTableSizeChange2(event:any):void{
    this.tableSize2 = event.target.value;
    this.page = 1;
    this.DsChuaAdd();
  }
  // !phan trang
  loaiKhoiDS(idUser,idLopHoc, hoten){ 
    console.log(idLopHoc, idUser, hoten);     
    if(confirm("Xóa Sinh Viên: "+ hoten +" khỏi danh sách? ")){
      this.service.removeLop(idUser).subscribe(res=>{ 
        this.service.theoLopHoc(idLopHoc).subscribe(data=>{
          this.DsSinhVien = data;          
        });        
      });        
    }      
  }
  themSVClick(){
    this.service.dsUsChuaAdd().subscribe(data=>{
      this.DsChuaAdd = data;
      console.log(this.DsChuaAdd);
    })
  }
  addUsertoClass(id,idLop){
    this.service.addLopHoc(id, idLop).subscribe(res=>{
      alert(res.toString());
      this.service.dsUsChuaAdd().subscribe(data=>{
        this.DsChuaAdd = data;
        console.log(this.DsChuaAdd);
      });
      this.service.theoLopHoc(idLop).subscribe(data=>{
        this.DsSinhVien = data;          
      });
    })
  }
  saveLopHpc(idLopHoc){    
    this.data = this.editLopHoc.value;
    console.log(idLopHoc,this.data);
    this.service.suaLopHoc(idLopHoc,this.data).subscribe(res=>{
      alert(res.toString());

    })
  }

}
