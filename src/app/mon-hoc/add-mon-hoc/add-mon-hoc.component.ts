import { Component, OnInit, Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-mon-hoc',
  templateUrl: './add-mon-hoc.component.html',
  styleUrls: ['./add-mon-hoc.component.css']
})
export class AddMonHocComponent implements OnInit {
  @Input('dsLopHoc') 
    DsLopHoc:any=[];
  DsGiaoVien:any=[];
  DsPhongHoc:any=[];
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.loadUser();
    this.loadPhong();
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
  onSubmit(monHocAdd:any){
    this.service.themMonHoc(monHocAdd).subscribe(result =>{
      alert(result.toString());
    });
  }
}
