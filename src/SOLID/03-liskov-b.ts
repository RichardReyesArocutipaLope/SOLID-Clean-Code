export abstract class Vehicle {
    abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {
    constructor(private numberOfSeats: number) { super(); }
    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {
    constructor(private numberOfSeats: number) { super(); }
    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {
    constructor(private numberOfSeats: number) { super(); }
    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {
    constructor(private numberOfSeats: number) { super(); }
    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}



// ! SIN APLICAR OCP Y LSP
// export class Tesla {

//     constructor( private numberOfSeats: number ) {}

//     getNumberOfTeslaSeats() {
//         return this.numberOfSeats;
//     }
// }

// export class Audi {

//     constructor( private numberOfSeats: number ) {}

//     getNumberOfAudiSeats() {
//         return this.numberOfSeats;
//     }
// }

// export class Toyota {

//     constructor( private numberOfSeats: number ) {}

//     getNumberOfToyotaSeats() {
//         return this.numberOfSeats;
//     }
// }

// export class Honda {

//     constructor( private numberOfSeats: number ) {}

//     getNumberOfHondaSeats() {
//         return this.numberOfSeats;
//     }
// }
