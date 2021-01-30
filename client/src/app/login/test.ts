// Tranfer data from computer to laptop using pendrive


class Computer { // Component
    data;
    constructor(pendrive: Pendrive) {

    }
}

class Laptop { // Component
    data;
    constructor(pendrive: Pendrive) {

    }
}

class Pendrive { // service
    data;
    constructor() {

    }
}

let pendrive = new Pendrive();
let computer = new Computer(pendrive);
let laptop = new Laptop(pendrive);
//
pendrive.data = computer.data;
laptop.data = pendrive.data;