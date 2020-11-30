import { Component, OnInit } from '@angular/core';
import { Driver } from '../interfaces/driver';
import { DriversService } from '../services/drivers.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent implements OnInit {
  drivers: Array<Driver>;
  temporal;

  constructor(private driversService: DriversService) {}

  ngOnInit(): void {
    this.getDrivers();
  }

  getDrivers() {
    this.driversService.getDrivers().subscribe((response: Array<Driver>) => {
      this.drivers = response;
      let swapped = false;
      for (let i = 0; i < this.drivers.length; i++) {
        for (let j = 0; j < this.drivers.length; j++) {
          if (this.drivers[j] > this.drivers[j + 1]) {
            this.temporal = this.drivers[j];
            this.drivers[j] = this.drivers[j + 1];
            this.drivers[j + 1] = this.temporal;
            swapped = true;
          }
        }
        if (swapped === false) {
          break;
        }
      }
    });
    return this.drivers
  }
}
