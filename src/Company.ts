import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    address: string;
    markerContent(): string {
        return `
        <h2>${this.companyName}</h2>
        <h4>${this.catchPhrase}</h4>
        <p>${this.address}</p>
        `;
    }

    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.address = `${faker.address.streetAddress()}, ${faker.address.cityName()}`;
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }
}
