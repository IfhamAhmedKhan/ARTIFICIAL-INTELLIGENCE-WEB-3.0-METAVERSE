// Question 38: Cities: Describing cities with a function.

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Tokyo", "Japan");
describe_city("Berlin", "Germany");
describe_city("Auckland", "New zealand");