import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //readonly APIUrl = "http://localhost:5001/api";
  readonly APIUrl = "http://localhost:55907/api";
  constructor(private http:HttpClient) { }
//User
  dsUsers():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Users');
  }
  dsUsChuaAdd():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Users/NullLop');
  }
  theoLoaiUser(loaiUser:any){
    return this.http.get<any>(this.APIUrl+'/Users/loaiUser/'+loaiUser);
  }
  theoLopHoc(idLopHoc:any){
    return this.http.get<any>(this.APIUrl+'/Users/LopHoc/'+idLopHoc)
  }
  theoTungUser(idUser:any){
    return this.http.get<any>(this.APIUrl+'/Users/'+idUser);
  }
  themUsers(data:any){
    return this.http.post<any>(this.APIUrl+'/Users', data);
  }
  suaUsers(iduser:any,val:any){
    return this.http.put<any>(this.APIUrl+'/Users/'+iduser,val);
  }
  removeLop(idLopHoc:any,val=null){
    return this.http.put<any>(this.APIUrl+'/Users/updateLop/'+idLopHoc,val);
  }
  disableUser(idUser:any,val=4){
    return this.http.put<any>(this.APIUrl+'/Users/disableUser/'+idUser,val);
  }
  addLopHoc(id:number, idLop:number,val=null){
    return this.http.put<any>(this.APIUrl+'/Users/AddLop/'+id+'/'+idLop,val);
  }
  deleteUser(idUser:number):Observable<any[]>{
    return this.http.delete<any>(this.APIUrl+'/Users/'+idUser);
  }
//End-User
//lophoc
  dsLopHoc():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/LopHoc');
  }
  themLopHoc(data:any){
    return this.http.post<any>(this.APIUrl+'/LopHoc', data);
  }
  suaLopHoc(idLopHoc:any,val:any){
    return this.http.put<any>(this.APIUrl+'/LopHoc/'+idLopHoc,val);
  }
  chiTietLopHoc(idLopHoc:any){
    return this.http.get<any>(this.APIUrl+'/LopHoc/'+idLopHoc);
  }
  delete(id:number){
    return this.http.delete<any>(this.APIUrl+'/LopHoc/'+id);
  }
  // MonHoc
  dsMonHoc():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/MonHoc');
  }
  themMonHoc(data:any){
    return this.http.post<any>(this.APIUrl+'/MonHoc', data);
  }
  suaMonHoc(idMonHoc:any,val:any){
    return this.http.put<any>(this.APIUrl+'/MonHoc/'+idMonHoc,val);
  }
  chiTietMonHoc(idMonHoc:any){
    return this.http.get<any>(this.APIUrl+'/MonHoc/'+idMonHoc);
  }
  deleteMonHoc(id:number){
    return this.http.delete<any>(this.APIUrl+'/MonHoc/'+id);
  }
  theoTinhTrang(idTinhTrang:any){
    return this.http.get<any>(this.APIUrl+'/TinhTrang/'+idTinhTrang);
  }
  // PhongHoc
  dsPhongHoc():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/PhongHoc');
  }
  // THOI KHOA BIEU
  // ! END
  //Notifications
  dsNotification():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Notifications/notificationresult');
  }
  delNotification(id:number){
    return this.http.delete<any>(this.APIUrl+'/Notifications/deletenotifications');
  }
  //End Noti
  countNotification():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Notifications/UserCount');
  }

  // QL buoi hoc
  dsBuoiHoc():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/QLBuoiHoc');
  }
  updateBuoiHoc(idBuoiHoc:any,val:any){
    return this.http.put<any>(this.APIUrl+'/QLBuoiHoc/'+idBuoiHoc,val);
  }
  chiTietQlLop(idBuoiHoc:any){
    return this.http.get<any>(this.APIUrl+'/QLBuoiHoc/'+idBuoiHoc);
  }
  dsNhanDien(idBuoiHoc:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/NhanDiens/'+idBuoiHoc)
  }
  
}
