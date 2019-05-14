import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JoinComponent} from "./join/join.component";
import {CreateComponent} from "./create/create.component";
import {AdminGuard} from "./common/admin/admin.guard";

const routes: Routes = [
  {path: '', component: JoinComponent},
  {path: 'admin', component: CreateComponent, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
