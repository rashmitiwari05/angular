import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../model/flight';

@Injectable()
export class FlightService{
  updatedFlight(flightnumber: any) {
    throw new Error("Method not implemented.");
  }
 
  findFlightById(flightnumber: any): Observable<Flight> {
    throw new Error("Method not implemented.");
  }
  client:HttpClient ;
  constructor(client:HttpClient ){
  this.client=client;
  }

  addFlight(flight:Flight): Observable<Flight>{
    let url='http://localhost:8086/flights/add';
    let result:Observable<Flight>= this.client.post<Flight>(url,flight);
    return result;
    }


    fetchAllFlights():Observable<Flight[]>
    {
      let url='http://localhost:8086/flights';
      let observable:Observable<Flight[]> =this.client.get<Flight[]>(url);
      return observable;
    }


    deleteFlightById(flightnumber:number){
      let url='http://localhost:8086/flights/delete/'+flightnumber;
      let result:Observable<Flight>=this.client.delete<Flight>(url);
      return result;
    }

    updateFlight(flight:Flight): Observable<Flight>{
      let url='http://localhost:8086/flights/put/';
      let result:Observable<Flight>= this.client.post<Flight>(url,flight);
      return result;
      }
  }
 
