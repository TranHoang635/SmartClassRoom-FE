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

  }

  loadPhong(){
    this.service.dsPhongHoc().subscribe(dataPh =>{
      this.DsPhongHoc=dataPh;
    })
  }

  onSubmit(data: any) {
    // kiểm tra xem dữ liệu đã nhập vào form có đầy đủ hay không
    if (!data.tenPhongHoc || !data.moTa || !data.tinhTrang) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    this.service.themPhongHoc(data).subscribe(result => {
      alert(result.toString());
      // reset giá trị của biến DsPhongHoc để load lại danh sách phòng học
      this.DsPhongHoc = [];
      this.loadPhong();
    });
  }
  

}
