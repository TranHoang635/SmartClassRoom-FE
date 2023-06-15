import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-lop-hoc',
  templateUrl: './add-lop-hoc.component.html',
  styleUrls: ['./add-lop-hoc.component.css']
})
export class AddLopHocComponent implements OnInit {

  lophocAdd: FormControl;
  constructor(private service: SharedService) { }

  ngOnInit(): void {
  }

  onSubmit(lopHoc:any){
    this.service.themLopHoc(lopHoc).subscribe(result =>{
      alert(result.toString());
    });
  }

}
