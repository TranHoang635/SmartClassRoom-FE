import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  constructor() { }

  data:any=[];

  // public hubConnection: signalR.HubConnection
  //   public startConnection = () => {
  //     this.hubConnection = new signalR.HubConnectionBuilder()
  //                             .withUrl('https://localhost:44384/Users')
  //                             .build();
  //     this.hubConnection
  //       .start()
  //       .then(() => console.log('Connection started'))
  //       .catch(err => console.log('Error while starting connection: ' + err))
  //   }
  //   public addTransferChartDataListener = () => {
  //     this.hubConnection.on('transferchartdata', (data) => {
  //       this.data = data;
  //       console.log(data);
  //     });
  //   }
    
  //   .then(() => {
  //     console.log('Connection started');
  //     this.askServer();
  //     this.askServerListener();          
  //   })
    
  //   async askServer(){
  //     await  this.hubConnection.invoke("askServer","hey")
  //       .catch(err => console.error(err));
  //   }
  //   askServerListener(){
  //     this.hubConnection.on("askServerResponse",(data)=>{
  //       console.log('askServer.Listener');
  //       console.log(data);
  //     })
  //   }
}
