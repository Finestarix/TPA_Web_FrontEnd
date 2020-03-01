import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LabelType, Options} from 'ng5-slider';
import {FlightService} from '../../../../services/flight.service';
import * as moment from 'moment';

@Component({
  selector: 'app-search-plane',
  templateUrl: './search-plane.component.html',
  styleUrls: ['./search-plane.component.scss']
})
export class SearchPlaneComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private flightService: FlightService) {
    this.selectedSort = 'sortBy';

    this.activatedRoute.queryParams.subscribe(async params => {
      await this.getAllParameterData(params);
    });
  }

  from: string;
  to: string;
  startDate: Date;
  endDate: Date;
  passenger: string;
  class: string;
  status: string;

  checkboxTransit: boolean[] = [false, false, false];
  checkboxDepartureTime: boolean[] = [false, false, false, false];
  checkboxArrivalTime: boolean[] = [false, false, false, false];
  checkboxFacility: boolean[] = [false, false, false, false];
  checkboxArlines: boolean[] = [false, false];
  checkboxTransitAirport: boolean[] = [];

  valueTransitDuration = 0;
  highValueTransitDuration = 600;
  valueTripDuration = 0;
  highValueTripDuration = 600;
  options: Options = {
    floor: 0,
    ceil: 600,
  };

  planeData: any;
  planeDataTransit: string[] = [];
  selectedSort: string;

  ngOnInit() {
  }

  getAllParameterData(params) {

    if (params.from === undefined) {
      this.router.navigateByUrl('/Flight');
      return;
    }

    this.from = params.from;
    this.to = params.to;
    this.startDate = new Date(params.startDate);
    this.endDate = new Date(params.endDate);
    this.passenger = params.passenger;
    this.class = params.class;
    this.status = params.status;

    let arrivalTime: string;
    if (status === 'true') {
      this.startDate.setHours(this.startDate.getHours() + 7);
      arrivalTime = this.startDate.toISOString().substr(0, 11) + '00:00:00Z';
    } else {
      this.endDate.setHours(this.endDate.getHours() + 7);
      arrivalTime = this.endDate.toISOString().substr(0, 11) + '00:00:00Z';
    }

    this.flightService.getFlightData(this.from, this.to, arrivalTime).subscribe(async value => {
      await this.getFlightData(value);
    });
  }

  getFlightData(value) {
    this.planeData = value.data.FlightByLocation;

    for (const plane of this.planeData) {
      if (plane.transit.name !== 'No Airport') {
        this.planeDataTransit.push(plane.transit.name);
      }
      // @ts-ignore
      const dur = moment.duration(moment(plane.departureTime).diff(moment(plane.arrivalTime))).asMinutes();
      // @ts-ignore
      plane.duration = Math.floor(dur / 60) + ' H ' + (dur - ( Math.floor(dur / 60) * 60)) + ' M';
    }
  }

  goToSearchPlane() {
    this.router.navigateByUrl('Flight');
  }

  resetAll() {
    this.checkboxTransit = [false, false, false];
    this.checkboxDepartureTime = [false, false, false, false];
    this.checkboxArrivalTime = [false, false, false, false];
    this.checkboxFacility = [false, false, false, false];
    this.checkboxArlines = [false, false];

    for (let i = 0 ; i < this.checkboxTransitAirport.length ; i++) {
      this.checkboxTransitAirport[i] = false;
    }
  }

  nextStep() {
    if (status === 'false') {
      alert('Done');
      return;
    }

    this.router.navigate(['/Flight/Search'], {
      queryParams: {
        from: this.to,
        to: this.from,
        startDate: moment(this.startDate).format('MM-DD-YYYY'),
        endDate: moment(this.endDate).format('MM-DD-YYYY'),
        passenger: this.passenger,
        class: this.class,
        status: false
      }
    });

  }
}
