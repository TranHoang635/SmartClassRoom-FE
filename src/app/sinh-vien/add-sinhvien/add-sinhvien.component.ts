import { Component, OnInit , Input} from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-add-sinhvien',
  templateUrl: './add-sinhvien.component.html',
  styleUrls: ['./add-sinhvien.component.css']
})
export class AddSinhvienComponent implements OnInit {

  sinhvienAdd: FormControl;
  submited:boolean = false;
  constructor(
    private service:SharedService, private fb:FormBuilder, private router: ActivatedRoute,  ) { }

  @Input() DSUser:any=[]; 

  @Input('dsLopHoc') DsLopHoc:any=[]; // truyền từ bên dsUser component sang

  ngOnInit(): void {
    this.loadLopHoc();
  }
  
  loadLopHoc(){
    this.service.dsLopHoc().subscribe(dataLopHoc =>{
      this.DsLopHoc=dataLopHoc;
    })
  }
  
  onSubmit(user:any){
    console.log(user);
    this.submited=true;   
    this.service.themUsers(user).subscribe(result =>{
      alert(result.toString());  
      this.sinhvienAdd.reset();
    });
  }

}
