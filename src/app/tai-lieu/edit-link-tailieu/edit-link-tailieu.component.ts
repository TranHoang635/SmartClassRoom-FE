import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormControl, FormGroup } from '@angular/forms';  
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-edit-link-tailieu',
  templateUrl: './edit-link-tailieu.component.html',
  styleUrls: ['./edit-link-tailieu.component.css']
})
export class EditLinkTailieuComponent implements OnInit {

    @Input('chiTietTaiLieu')
      taiLieu:any=[];
      DsTaiLieu:any=[];
      DsMonHocQL:any=[];
      
    editTaiLieu: FormGroup;
      TenTaiLieu:string;
      UrlTaiLieu:string;
        IdMonHoc:number;
        IdUser:number;
        IdTaiLieu:number;
    val:any;
      
  constructor(
    private fb:FormBuilder,
    private router:ActivatedRoute,
    private service:SharedService ) { 
      this.editTaiLieu = fb.group({
        TenTaiLieu: new FormControl(),
        UrlTaiLieu: new FormControl(),
          IdMonHoc: new FormControl(),
          IdUser: new FormControl(),
          IdTaiLieu: new FormControl(),
      })
     }

  ngOnInit(): void {
    // this.loadTaiLieu();
    this.loadMonHoc();
  }

  // loadTaiLieu(){
  //   this.service.dsTaiLieu().subscribe(dataTL =>{
  //     this.DsTaiLieu=dataTL;
  //     console.log(dataTL);
  //   })
  // }
  loadMonHoc(){
    this.service.dsMonHoc().subscribe(dataMonHoc =>{
      this.DsMonHocQL=dataMonHoc;
      console.log(dataMonHoc)
    })
  }

  PutData(idTaiLieu) {
    this.val = this.editTaiLieu.value;
    console.log(this.val);
    this.service.suaTaiLieu(idTaiLieu,this.val).subscribe(data=>{
      alert(data.toString());
      console.log(data);
    })
  }
}

