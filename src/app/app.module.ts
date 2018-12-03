import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverListService } from './services/driver-list.service';
import { HttpClientModule } from '@angular/common/http';
import { DriverComponent } from './driver/driver.component';
import { DriverListComponent } from './driver-list/driver-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    DriverListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DriverListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
