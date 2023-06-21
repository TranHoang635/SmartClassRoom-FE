import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DsLopHocComponent } from './lopHoc/ds-lop-hoc/ds-lop-hoc.component';
import { EditLopHocComponent } from './lopHoc/edit-lop-hoc/edit-lop-hoc.component';
import { AddLopHocComponent } from './lopHoc/add-lop-hoc/add-lop-hoc.component';
import { DeleteLopHocComponent } from './lopHoc/delete-lop-hoc/delete-lop-hoc.component';
import { UsersComponent } from './users/users.component';
import { DsUsersComponent } from './users/ds-users/ds-users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MonHocComponent } from './mon-hoc/mon-hoc.component';
import { DsMonHocComponent } from './mon-hoc/ds-mon-hoc/ds-mon-hoc.component';
import { EditMonHocComponent } from './mon-hoc/edit-mon-hoc/edit-mon-hoc.component';
import { AddMonHocComponent } from './mon-hoc/add-mon-hoc/add-mon-hoc.component';
import { ToastrModule } from 'ngx-toastr';
import { QuanLyLopComponent } from './quan-ly-lop/quan-ly-lop.component';
import { EditQuanLyComponent } from './quan-ly-lop/edit-quan-ly/edit-quan-ly.component';
import { AddQuanLyComponent } from './quan-ly-lop/add-quan-ly/add-quan-ly.component';
import { ChiTietLopComponent } from './quan-ly-lop/chi-tiet-lop/chi-tiet-lop.component';
import { ChiTietUserComponent } from './quan-ly-lop/chi-tiet-lop/chi-tiet-user/chi-tiet-user.component';
import { GiangVienComponent } from './giang-vien/giang-vien.component';
import { SinhVienComponent } from './sinh-vien/sinh-vien.component';
import { TaiLieuComponent } from './tai-lieu/tai-lieu.component';
import { PhuHuynhComponent } from './phu-huynh/phu-huynh.component';
import { AddGiangvienComponent } from './giang-vien/add-giangvien/add-giangvien.component';
import { DeleteGiangvienComponent } from './giang-vien/delete-giangvien/delete-giangvien.component';
import { DsGiangvienComponent } from './giang-vien/ds-giangvien/ds-giangvien.component';
import { EditGiangvienComponent } from './giang-vien/edit-giangvien/edit-giangvien.component';
import { AddPhuhuynhComponent } from './phu-huynh/add-phuhuynh/add-phuhuynh.component';
import { DeletePhuhuynhComponent } from './phu-huynh/delete-phuhuynh/delete-phuhuynh.component';
import { DsPhuhuynhComponent } from './phu-huynh/ds-phuhuynh/ds-phuhuynh.component';
import { EditPhuhuynhComponent } from './phu-huynh/edit-phuhuynh/edit-phuhuynh.component';
import { AddSinhvienComponent } from './sinh-vien/add-sinhvien/add-sinhvien.component';
import { DeleteSinhvienComponent } from './sinh-vien/delete-sinhvien/delete-sinhvien.component';
import { DsSinhvienComponent } from './sinh-vien/ds-sinhvien/ds-sinhvien.component';
import { EditSinhvienComponent } from './sinh-vien/edit-sinhvien/edit-sinhvien.component';
import { HomeComponent } from './home/home.component';
import { LopHocComponent } from './lop-hoc/lop-hoc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { PageActivityComponent } from './page-activity/page-activity.component';
import { PageSettingsComponent } from './page-settings/page-settings.component';
import { AddLinkTailieuComponent } from './tai-lieu/add-link-tailieu/add-link-tailieu.component';
import { DeleteLinkTailieuComponent } from './tai-lieu/delete-link-tailieu/delete-link-tailieu.component';
import { DsLinkTailieuComponent } from './tai-lieu/ds-link-tailieu/ds-link-tailieu.component';
import { EditLinkTailieuComponent } from './tai-lieu/edit-link-tailieu/edit-link-tailieu.component';
import { DatLaiMatKhauComponent } from './dat-lai-mat-khau/dat-lai-mat-khau.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { PhongHocComponent } from './phong-hoc/phong-hoc.component';
import { AddPhongHocComponent } from './phong-hoc/add-phong-hoc/add-phong-hoc.component';
import { DsPhongHocComponent } from './phong-hoc/ds-phong-hoc/ds-phong-hoc.component';
import { EditPhongHocComponent } from './phong-hoc/edit-phong-hoc/edit-phong-hoc.component';

@NgModule({
  declarations: [
    AppComponent,
    LopHocComponent,
    DsLopHocComponent,
    EditLopHocComponent,
    AddLopHocComponent,
    DeleteLopHocComponent,
    UsersComponent,
    DsUsersComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    DashboardComponent,
    MonHocComponent,
    DsMonHocComponent,
    EditMonHocComponent,
    AddMonHocComponent,
    QuanLyLopComponent,
    EditQuanLyComponent,
    AddQuanLyComponent,
    ChiTietLopComponent,
    ChiTietUserComponent,
    GiangVienComponent,
    SinhVienComponent,
    TaiLieuComponent,
    PhuHuynhComponent,
    AddGiangvienComponent,
    DeleteGiangvienComponent,
    DsGiangvienComponent,
    EditGiangvienComponent,
    AddPhuhuynhComponent,
    DeletePhuhuynhComponent,
    DsPhuhuynhComponent,
    EditPhuhuynhComponent,
    AddSinhvienComponent,
    DeleteSinhvienComponent,
    DsSinhvienComponent,
    EditSinhvienComponent,
    HomeComponent,
    LoginComponent,
    ForgotComponent,
    PageProfileComponent,
    PageActivityComponent,
    PageSettingsComponent,
    AddLinkTailieuComponent,
    DeleteLinkTailieuComponent,
    DsLinkTailieuComponent,
    EditLinkTailieuComponent,
    DatLaiMatKhauComponent,
    PhongHocComponent,
    AddPhongHocComponent,
    DsPhongHocComponent,
    EditPhongHocComponent,
  ],
  imports: [
    BrowserModule,
    CanvasJSAngularChartsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatIconModule,
    ToastrModule.forRoot({
      enableHtml:true,
      timeOut:10000,
      positionClass: 'toast-top-right',
      preventDuplicates:false,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
