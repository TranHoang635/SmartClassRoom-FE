import { Component, OnInit , Input} from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userAdd: FormControl;
  submited:boolean = false;
  constructor(
    private fb:FormBuilder, 
    private service:SharedService, 
    private router: ActivatedRoute,  ) { }

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
      this.userAdd.reset();
    });
  }

}
