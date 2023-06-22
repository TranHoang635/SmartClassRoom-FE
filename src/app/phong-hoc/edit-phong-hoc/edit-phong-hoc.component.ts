import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-phong-hoc',
  templateUrl: './edit-phong-hoc.component.html',
  styleUrls: ['./edit-phong-hoc.component.css']
})
export class EditPhongHocComponent implements OnInit {
  @Input('editPhongHoc')
  phongHoc:any=[];
  @Input('dsPhongHoc')
  DsPhongHoc:any=[];

  val:any;
  editPhongHoc: FormGroup;
    MaPhongHoc: string ="";
    TenPhongHoc: string ="";
    IdTinhTrang: number;

  constructor(
    private service:SharedService, 
    private fb:FormBuilder) {
      this.editPhongHoc = fb.group({
        MaPhongHoc: new FormControl(),
        TenPhongHoc: new FormControl(),
        IdTinhTrang: new FormControl(),
      })
     }

  ngOnInit(): void {
    this.loadPhong();
  }

  PostData(idPhongHoc){    
    this.val = this.editPhongHoc.value;
    console.log(this.val);
    this.service.suaMonHoc(idPhongHoc,this.val).subscribe(data=>{
      alert(data.toString());
    })
  }

  loadPhong(){
    this.service.dsPhongHoc().subscribe(dataPh =>{
      this.DsPhongHoc=dataPh;
    })
  }
}