import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight';
import { FlightService } from '../services/flightservice';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {
  updatedFlight:Flight=null;
  service:FlightService;
  
  
  constructor(service:FlightService) {
    this.service=service;
   }
  
  
   
  ngOnInit(): void {
  }
  updateFight(flightForm:any){
    let details=flightForm.value;
    let flightnumber=details.flightnumber;
    let flightmodel=details.flightmodel;
    let carriername=details.carriername;
    let seatcapacity = details.seatcapacity;
    let flight=new Flight(flightnumber,flightmodel,carriername,seatcapacity);
    this.service.updateFlight(flightnumber);
    this.updatedFlight=flight;
    flightForm.reset();

  }
  
}
