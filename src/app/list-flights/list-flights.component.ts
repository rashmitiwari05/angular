import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight';
import { FlightService } from '../services/flightservice';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-list-flights',
  templateUrl: './list-flights.component.html',
  styleUrls: ['./list-flights.component.css']
})
export class ListFlightsComponent implements OnInit {
  flights:Flight[]=[];

  service:FlightService;

  orderByField:string=null;


  constructor(service:FlightService) {
  this.service=service;
  let observable:Observable<Flight[]>=this.service.fetchAllFlights();
  observable.subscribe(
    flights=>{
      this.flights=flights
     
    },
    err=>console.log(err)
    );
  }

  ngOnInit(): void {
  }
 
  orderBy(field:string){
    this.orderByField=field;     
  }
 
  removeFlightById(flightnumber:number){
    let result:Observable<Flight>=this.service.deleteFlightById(flightnumber);
    result.subscribe(flight=>{
        this.removeLocalFlight(flightnumber);
    },
    err=>{
     console.log("err in deleteing flights="+err);
    })
      }

      removeLocalFlight(flightnumber:number){
        let foundIndex=-1;
        for(let i=0;i<this.flights.length;i++){
          let flight=this.flights[i];
          if(flight.flightNumber===flightnumber){
            foundIndex=i;
            break;
          }
        }
        if(foundIndex<0){
          return;
        }
        this.flights.splice(foundIndex,1);
}
}
