//this includes the vehicle class as a module

//changed it from ./vehicle to ./vehicleBaseClass. 'require' imports the vegicle module, established on the bottom of vehicleBaseClass.js

const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");

//creating Car, a sublass of Vehicle
class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage, maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService){
        super(make, model, year, color, mileage);
        this.maximumPassengers = maximumPassengers;
        this.passenger = passenger;
        this.numberOfWheels = numberOfWheels;
        this.maximumSpeed = maximumSpeed;
        this.fuel = fuel;
        this.scheduleService = scheduleService;
    }

    loadPassenger(numPassengers){

        if((this.passenger + numPassengers) < this.maximumPassengers){
            this.passenger += numPassengers;
            return this.availableRoom = true;
        } else {
            console.log('There is not enough space to add passengers');
            return this.availableRoom = false;
        }
    }

    startCar(){
        if(this.fuel > 0){
            return this.started = true
        } else {
            console.log('You do not have enough fuel to start the car')
            return this.started = false
        }
    }

    scheduleNewService(mileage){
        if(mileage > 30000){
            return this.scheduleService = true;
        } else {
            return this.scheduleService = false;
        }
    }
}



let A28 = new Car("Mecury", "Sedan", "1965", "Cherry Red", "50000", 6, 0, 4, 200, 100, false)

// console.log(A28.color)
// console.log(A28.numberOfWheels)


//some tests
console.log(A28.passenger)
A28.loadPassenger(5)
console.log(A28.passenger)
console.log(A28.availableRoom)
A28.loadPassenger(1)
console.log(A28.availableRoom)
console.log(A28.startCar())
console.log(A28.scheduleNewService(10000))