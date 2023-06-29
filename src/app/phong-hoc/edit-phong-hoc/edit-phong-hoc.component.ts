import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-edit-phong-hoc',
  templateUrl: './edit-phong-hoc.component.html',
  styleUrls: ['./edit-phong-hoc.component.css']
})
export class EditPhongHocComponent implements OnInit {

  @Input('chiTietPhong')
    phong:any=[];
    DsPhongHoc:any=[];

  editPhongHoc: FormGroup;
    MaPhongHoc:string;
    TenPhongHoc:string;
    MoTa:string;
    IdPhongHoc:number;
    TenTinhTrang:string;
    IdTinhTrang: number;
    TinhTrang:number;
    val:any;
  
  constructor(
    private fb:FormBuilder,
    private service:SharedService,
    private router:ActivatedRoute ) {
      this.editPhongHoc = fb.group({
        MaPhongHoc: new FormControl(),
        TenPhongHoc: new FormControl(),
        MoTa: new FormControl(),
        TinhTrang: new FormControl(),
        TenTinhTrang: new FormControl(),
        IdTinhTrang: new FormControl(),
        IdPhongHoc: new FormControl(),
      })
     }

  ngOnInit(): void {
    this.loadPhong();
  }

    loadPhong(){
    this.service.dsPhongHoc().subscribe(data =>{
      this.DsPhongHoc=data;
    })
  }
  
  PutData(idPhongHoc){    
    this.val = this.editPhongHoc.value;
    console.log(this.val);
    this.service.suaPhongHoc(idPhongHoc,this.val).subscribe(data=>{
      alert(data.toString());
      console.log(data);
    })
  }
}
