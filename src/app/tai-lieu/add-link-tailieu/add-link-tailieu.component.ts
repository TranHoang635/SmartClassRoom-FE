import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-link-tailieu',
  templateUrl: './add-link-tailieu.component.html',
  styleUrls: ['./add-link-tailieu.component.css']
})
export class AddLinkTailieuComponent implements OnInit {

  @Input('dsTaiLieu') 
    DsTaiLieu:any=[];

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.loadTaiLieu();
  }

  loadTaiLieu(){
    this.service.dsTaiLieu().subscribe(dataTaiLieu =>{
      this.DsTaiLieu=dataTaiLieu;
    })
  }

  onSubmit(tailieu:any){
    this.service.themMonHoc(tailieu).subscribe(result =>{
      alert(result.toString());
    });
  }

}
