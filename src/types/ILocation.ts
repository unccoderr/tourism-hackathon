export interface ILocation {
    name: string,
    description: string,
    imageUrl: string,
    latitude: number,
    longitude: number
}

export class Location {
    name: string
    description: string
    imageUrl: string
    latitude: number
    longitude: number

    constructor (name: string, description: string, imageUrl: string, latitude: number, longitude: number) {
        this.name = name
        this.description = description
        this.imageUrl = imageUrl
        this.latitude = latitude
        this.longitude = longitude
    }
}