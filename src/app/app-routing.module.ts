import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { EditLopHocComponent } from './lopHoc/edit-lop-hoc/edit-lop-hoc.component';
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


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },

  { 
    path: 'forgot', 
    component: ForgotComponent
  },

  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'page-profile', component: PageProfileComponent },

      { path: 'page-activity', component: PageActivityComponent },

      { path: 'page-settings', component: PageSettingsComponent },

      { path: '', component: DashboardComponent },

      { path: 'user', component: UsersComponent },

      { path: 'giang-vien', component: GiangVienComponent },

      { path: 'sinh-vien', component: SinhVienComponent },

      { path: 'phu-huynh', component: PhuHuynhComponent },

      { path: 'lopHoc', component: LopHocComponent },

      { path: 'lopHoc/edit-lop-hoc/:id', component: EditLopHocComponent },

      { path: 'mon-hoc', component: MonHocComponent },

      { path: 'quan-ly-lop', component: QuanLyLopComponent },

      { path: 'quan-ly-lop/chi-tiet-lop/:id', component: ChiTietLopComponent },

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
