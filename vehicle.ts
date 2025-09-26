// Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// Implement the Car class that implements Vehicle interface
class Car implements Vehicle {
    // Properties required by Vehicle interface
    make: string;
    model: string;
    year: number;

    // Constructor to initialize properties
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Implement the start method
    start(): void {
        console.log("Car engine started");
    }
}

// Create an instance of the Car class
const myCar = new Car("Toyota", "Camry", 2023);

// Call the start method
myCar.start();

// Optional: Display car information
console.log(`Car details: ${myCar.year} ${myCar.make} ${myCar.model}`);
