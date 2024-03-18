// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

let laptop = {
    make: "Dell",
    model: "vPro",
    year: 2022,
    describe: function() {
        console.log(`Laptop details: Make: ${this.make}, Model: ${this.model}, Year: ${this.year}.`);
    }
};
laptop.describe();