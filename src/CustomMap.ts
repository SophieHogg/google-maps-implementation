export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
            zoom: 2.4,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }

    addMarker(place: Mappable, markerUse?: string): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: place.location.lat,
                lng: place.location.lng,
            },
            label: markerUse,
        });

        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: place.markerContent(),
            });
            infoWindow.open(this.googleMap, marker);
        });
    }
}

// CustomMap is its own class to prevent one from calling map functions (e.g. setZoom/setCenter) inside index.ts, which we maybe don't want.
