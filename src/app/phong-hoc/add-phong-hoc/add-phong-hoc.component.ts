import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-phong-hoc',
  templateUrl: './add-phong-hoc.component.html',
  styleUrls: ['./add-phong-hoc.component.css']
})
export class AddPhongHocComponent implements OnInit {

  @Input('dsPhongHoc') 
    DsPhongHoc:any=[];

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.loadPhong();
  }

  loadPhong(){
    this.service.dsPhongHoc().subscribe(dataPhong =>{
      this.DsPhongHoc=dataPhong;
    })
  }
  onSubmit(monHocAdd:any){
    this.service.themMonHoc(monHocAdd).subscribe(result =>{
      alert(result.toString());
    });
  }

}
