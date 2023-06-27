import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormControl, FormGroup } from '@angular/forms';  
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-add-quan-ly',
  templateUrl: './add-quan-ly.component.html',
  styleUrls: ['./add-quan-ly.component.css']
})
export class AddQuanLyComponent implements OnInit {

  DsLopHocQL:any=[]
  DsMonHocQL:any=[]
  DsPhongQL:any=[]
  DsGV:any=[]

  addQLLopForm: FormGroup;
    IdMonHoc:number;
    IdLopHoc:number;
    IdPhongHoc:number;
    IdUser:number;
    NgayHoc:string;
    Buoi:string;
    IdTinhTrang:number;
    val:any;

  constructor(
    private fb:FormBuilder,
    private router:ActivatedRoute,
    private service:SharedService) { 
      this.addQLLopForm = fb.group({
        IdMonHoc: new FormControl(),
        IdLopHoc: new FormControl(),
        IdPhongHoc: new FormControl(),
        IdUser: new FormControl(),
        NgayHoc: new FormControl(),
        IdTinhTrang: new FormControl(),
        Buoi: new FormControl(),
      })
    }

  ngOnInit(): void {
    this.loadLopHoc();
    this.loadMonHoc();
    this.loadPhong();
    this.loadUser();
  }
  PostData(){    
    this.val = this.addQLLopForm.value;
    console.log(this.val);
    this.service.addBuoiHoc(this.val).subscribe(data=>{
      alert(data.toString());
    })
  }


  loadLopHoc(){
    this.service.dsLopHoc().subscribe(dataLopHoc =>{
      this.DsLopHocQL=dataLopHoc;
    })
  }
  loadMonHoc(){
    this.service.dsMonHoc().subscribe(dataMonHoc =>{
      this.DsMonHocQL=dataMonHoc;
      console.log(dataMonHoc)
    })
  }
  loadPhong(){
    this.service.dsPhongHoc().subscribe(dataPhong =>{
      this.DsPhongQL=dataPhong;
      console.log(dataPhong)
    })
  }
  loadUser(loaiUser:number=2){
    this.service.theoLoaiUser(loaiUser).subscribe(dataGV =>{
      this.DsGV=dataGV;
    })
  }

  
}
