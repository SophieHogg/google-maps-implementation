import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
    name: string;
    jobtitle: string;
    address: string;
    location: {
        lat: number;
        lng: number;
    };

    markerContent(): string {
        return `<h2>${this.name}</h2>
        <h4>${this.jobtitle}</h4>
        <p>${this.address}</p>
        `;
    }

    constructor() {
        this.name = faker.name.fullName();
        this.jobtitle = faker.name.jobTitle();
        this.address = `${faker.address.streetAddress()}, ${faker.address.cityName()}`;
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }
}
