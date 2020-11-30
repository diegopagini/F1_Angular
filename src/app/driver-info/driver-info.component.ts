import { Component, Input, OnInit } from '@angular/core';
import { Driver } from '../interfaces/driver';

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
  styleUrls: ['./driver-info.component.scss']
})
export class DriverInfoComponent implements OnInit {
  @Input() driver: Driver;

  constructor() { }

  ngOnInit(): void {
  }

}
