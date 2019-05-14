import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JoinComponent} from './join/join.component';
import {AdminGuard} from './common/admin/admin.guard';
import {ManageComponent} from './manage/manage.component';

const routes: Routes = [
  {path: '', component: JoinComponent},
  {path: 'admin', component: ManageComponent, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
