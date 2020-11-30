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
  driversPts;
  temporal;

  constructor(private driversService: DriversService) {}

  ngOnInit(): void {
    this.getDrivers();
  }

  getDrivers() {
    this.driversService.getDrivers().subscribe((response: Array<Driver>) => {
      this.drivers = response.sort(function(a,b) {
        if(a.pts < b.pts) {
          return 1;
        }
        if (a.pts > b.pts) {
          return -1
        }
        return 0;
      })
      //Woooooo funcionio, It works! Genial!

      // let swapped = false;

      // response.filter((el) => {
      //   return (this.driversPts = el.pts);
      // });
      // for (let i = 0; i < this.driversPts.length; i++) {
      //   for (let j = 0; j < this.driversPts.length; j++) {
      //     if (this.driversPts[j] > this.driversPts[j + 1]) {
      //       this.temporal = this.driversPts[j];
      //       this.driversPts[j] = this.driversPts[j + 1];
      //       this.driversPts[j + 1] = this.temporal;
      //       swapped = true;
      //     }
      //   }
      //   if (swapped === false) {
      //     break;
      //   }
      // }
    });
    // return this.driversPts;
  }
}
