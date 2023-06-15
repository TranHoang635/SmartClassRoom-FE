import { Component, OnInit, Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-edit-giangvien',
  templateUrl: './edit-giangvien.component.html',
  styleUrls: ['./edit-giangvien.component.css']
})
export class EditGiangvienComponent implements OnInit {

  @Input('dsLopHoc') 
  DsLopHoc:any=[];
@Input('chiTietUser') 
  user:any=[];
@Input('dsUser')
  DSUser:any=[];

  val:any;
  idHocSinh:any = this.user.idHocSinh;
  idUser:number = this.user.idUser;
  TenHocSinh:string;

editUser: FormGroup;
UserName:string = "";
HoTen:string = "";
Email:string = "";
Dienthoai:string = "";
DiaChi:string = "";
IdLoai:number;
IdLopHoc:number;
IdHocSinh:number;

constructor(
  private service:SharedService, 
  private fb:FormBuilder, 
  private router: ActivatedRoute) { 
    this.editUser = fb.group({
      UserName: new FormControl(),
      HoTen: new FormControl(),
      Email: new FormControl(),
      Dienthoai: new FormControl(),
      DiaChi: new FormControl(),
      IdLoai: new FormControl(),
      IdLopHoc: new FormControl(),
      IdHocSinh: new FormControl(),
    });
  }

ngOnInit(): void {   
  this.tenHocSinh(this.idHocSinh);
}
PostData(idUser){    
  this.val = this.editUser.value;
  this.service.suaUsers(idUser,this.val).subscribe(data=>{
    alert(data.toString());
  })
}
tenHocSinh(idHocSinh){
  this.service.theoTungUser(idHocSinh).subscribe(dtHocSinh => {
    this.TenHocSinh=dtHocSinh;
  })
}

}
