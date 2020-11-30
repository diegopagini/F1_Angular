import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Driver } from 'src/app/interfaces/driver';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.scss'],
})
export class DriverCardComponent implements OnInit {
  drivers: Array<Driver>;
  idDrivers: string;
  driver: Driver;

  constructor(
    private driverService: DriversService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idDrivers = this.activeRoute.snapshot.params.id;

    this.driverService.getDrivers().subscribe((Response: Array<Driver>) => {
      this.drivers = Response;
    });
  }

  // getDriver() {
  //   this.driverService.getDrivers().subscribe((Response: Array<Driver>) => {
  //     this.drivers = Response;
  //   });
  // }
}
