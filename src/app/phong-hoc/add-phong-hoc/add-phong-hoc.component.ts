import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormControl, FormGroup } from '@angular/forms';  
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-add-phong-hoc',
  templateUrl: './add-phong-hoc.component.html',
  styleUrls: ['./add-phong-hoc.component.css']
})
export class AddPhongHocComponent implements OnInit {
 
  DsPhongHoc:any=[];

  themPhongHocForm: FormGroup;
    MaPhongHoc:string;
    TenPhongHoc:string;
    MoTa:string;
    IdtinhTrang:number;
  val:any;

  constructor(
    private fb:FormBuilder,
    private router:ActivatedRoute,
    private service:SharedService) {
      this.themPhongHocForm = fb.group({
        MaPhongHoc: new FormControl(),
        TenPhongHoc: new FormControl(),
        MoTa: new FormControl(),
        IdtinhTrang: new FormControl()
      })
     }

  ngOnInit(): void {
    this.loadPhong();
  }

  loadPhong(){
    this.service.dsPhongHoc().subscribe(dataPh =>{
      this.DsPhongHoc=dataPh;
    })
  }

  PostData() {
    this.val = this.themPhongHocForm.value;
    console.log(this.val);
    this.service.themPhongHoc(this.val).subscribe(data=>{
      alert(data.toString());
    })
  }
  

}
