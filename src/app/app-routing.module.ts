import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { DriverListComponent } from './driver-list/driver-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/drivers', pathMatch: 'full' },
  { path: 'drivers', component: DriverListComponent },
  { path: 'drivers/:id', component: DriverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
