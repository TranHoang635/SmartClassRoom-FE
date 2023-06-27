import { Component, OnInit, Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormControl, FormGroup} from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-mon-hoc',
  templateUrl: './edit-mon-hoc.component.html',
  styleUrls: ['./edit-mon-hoc.component.css']
})
export class EditMonHocComponent implements OnInit {
  @Input('chiTietMon') 
    mon:any=[];
  @Input('dsLopHoc') 
    DsLopHoc:any=[];
  DsGiaoVien:any=[];
  DsPhongHoc:any=[];
  val:any;
  editMon: FormGroup;
    TenMonHoc: string;
    NgayBatDau: string;
    SoTiet: number;
    IdPhongHoc: number;
    IdLopHoc: number;
    IdUser: number;
    IdTinhTrang: number;

  constructor(
      private service:SharedService, 
      private fb:FormBuilder) { 
        this.editMon = fb.group({
          TenMonHoc: new FormControl(),
          NgayBatDau: new FormControl(),
          SoTiet: new FormControl(),
          IdPhongHoc: new FormControl(),
          IdLopHoc: new FormControl(),
          IdUser: new FormControl(),
          IdTinhTrang: new FormControl(),
        })
      }

  ngOnInit(): void {
    this.loadUser();
    this.loadPhong();
  }

  PostData(idMonHoc){    
    this.val = this.editMon.value;
    console.log(this.val);
    this.service.suaMonHoc(idMonHoc,this.val).subscribe(data=>{
      alert(data.toString());
    })
  }
  loadUser(loaiUser:number=2){
    this.service.theoLoaiUser(loaiUser).subscribe(dataGV =>{
      this.DsGiaoVien=dataGV;
    })
  }
  loadPhong(){
    this.service.dsPhongHoc().subscribe(dataPh =>{
      this.DsPhongHoc=dataPh;
    })
  }
}
