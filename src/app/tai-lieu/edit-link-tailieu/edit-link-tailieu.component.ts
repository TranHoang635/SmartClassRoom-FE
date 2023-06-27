import { Component, OnInit } from '@angular/core';
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

    DsTaiLieu:any=[];
    DsMonHocQL:any=[];

    themTaiLieuForm: FormGroup;
    IdMonHoc:number;
    TenTaiLieu:string;
    UrlTaiLieu:string;
  val:any;

  constructor(
    private fb:FormBuilder,
    private router:ActivatedRoute,
    private service:SharedService ) { 
      this.themTaiLieuForm = fb.group({
        IdMonHoc: new FormControl(),
        TenTaiLieu: new FormControl(),
        UrlTaiLieu: new FormControl()
      })
     }

  ngOnInit(): void {
    this.loadTaiLieu();
    this.loadMonHoc();
  }

  loadTaiLieu(){
    this.service.dsTaiLieu().subscribe(dataTL =>{
      this.DsTaiLieu=dataTL;
    })
  }
  loadMonHoc(){
    this.service.dsMonHoc().subscribe(dataMonHoc =>{
      this.DsMonHocQL=dataMonHoc;
      console.log(dataMonHoc)
    })
  }

  PutData() {

  }

}

