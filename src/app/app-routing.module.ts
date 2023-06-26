import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { EditLopHocComponent } from './lop-hoc/edit-lop-hoc/edit-lop-hoc.component';
import { MonHocComponent } from './mon-hoc/mon-hoc.component';
import { QuanLyLopComponent } from './quan-ly-lop/quan-ly-lop.component';
import { ChiTietLopComponent } from './quan-ly-lop/chi-tiet-lop/chi-tiet-lop.component';
import { GiangVienComponent } from './giang-vien/giang-vien.component';
import { SinhVienComponent } from './sinh-vien/sinh-vien.component';
import { PhuHuynhComponent } from './phu-huynh/phu-huynh.component';
import { TaiLieuComponent } from './tai-lieu/tai-lieu.component';
import { LopHocComponent } from './lop-hoc/lop-hoc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { PageActivityComponent } from './page-activity/page-activity.component';
import { PageSettingsComponent } from './page-settings/page-settings.component';
import { DatLaiMatKhauComponent } from './dat-lai-mat-khau/dat-lai-mat-khau.component';
import { ChiTietUserComponent } from './quan-ly-lop/chi-tiet-lop/chi-tiet-user/chi-tiet-user.component';
import { PhongHocComponent } from './phong-hoc/phong-hoc.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'login',  pathMatch: 'full' //lớp cha ngoài cùng 1
  },
  
  {
    path: 'login', component: LoginComponent  //lớp cha ngoài cùng 2
  },

  { 
    path: 'forgot', component: ForgotComponent //lớp cha ngoài cùng 3
  },

  {
    path: 'home', 
    component: HomeComponent, 
    children: [ // lớp con bên trong lớp cha 4 (single page: sidebar, navbar giữ nguyên vị trí khi di chuyển những lớp con bên trong)
      { path: 'page-profile', component: PageProfileComponent },

      { path: 'page-activity', component: PageActivityComponent },

      { path: 'page-settings', component: PageSettingsComponent },

      { path: 'dashboard', component: DashboardComponent },

      { path: 'user', component: UsersComponent },

      { path: 'giang-vien', component: GiangVienComponent },

      { path: 'sinh-vien', component: SinhVienComponent },

      { path: 'phu-huynh', component: PhuHuynhComponent },

      { path: 'lop-hoc', component: LopHocComponent, },

      { path: 'lop-hoc/edit-lop-hoc/:id', component: EditLopHocComponent },

      { path: 'mon-hoc', component: MonHocComponent },

      { path: 'quan-ly-lop', component: QuanLyLopComponent },

      { path: 'quan-ly-lop/chi-tiet-lop/:id', component: ChiTietLopComponent },

      { path: 'phong-hoc', component: PhongHocComponent },

      { path: 'tai-lieu', component: TaiLieuComponent },

      { path: 'dat-lai-mat-khau', component: DatLaiMatKhauComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
