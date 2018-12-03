import { Component, OnInit } from '@angular/core';
import { DriverListService } from '../services/driver-list.service';
import { ActivatedRoute } from '@angular/router';
import { Driver } from '../interfaces/driver';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  driver: Driver;
  constructor(private driverListService: DriverListService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.driverListService.getDriver(id)
      .subscribe(data => this.driver = data.MRData.DriverTable.Drivers[0]);
  }
}
