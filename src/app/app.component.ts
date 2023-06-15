import { Component, OnInit, OnDestroy} from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SmartClassRoom-FE';
  constructor(private http: HttpClient ) { }

  ngOnInit(){
  
    // this.snSer.startConnection();
    // this.snSer.addTransferChartDataListener();   
    // this.startHttpRequest();
  }

  // private startHttpRequest = () => {
  //   this.http.get('https://localhost:44384/Users')
  //     .subscribe(res => {
  //       console.log(res);
  //     })
  // }
  // ngOnDestroy(){
  //   this.snSer.hubConnection.off("askServerResponse");
  // }
}
