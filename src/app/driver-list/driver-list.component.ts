import { Component, OnInit } from '@angular/core';
import { DriverListService } from '../services/driver-list.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {
  drivers: any;
  constructor(public driverListService: DriverListService) { }

  ngOnInit(): void {
    this.driverListService.getDriverList()
      .subscribe(data => this.drivers = data.MRData.DriverTable.Drivers);
  }

}
