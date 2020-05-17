export class Flight{
    flightNumber:number;
    flightModel:string;
    carrierName:string;
    seatCapacity:number;
  flightnumber: Flight;
    
 constructor(flightnumber:number,flightmodel:string,carriername:string,seatcapacity:number){
     this.flightNumber=flightnumber;
     this.flightModel=flightmodel;
     this.carrierName=carriername;
     this.seatCapacity=seatcapacity;
 }
  
}