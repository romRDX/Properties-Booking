export interface Property {
    id: number,
    owner: string,
    contact: string,
    name: string,
    address: string,
    description: string,
}

export interface Booking {
    id: number,
    userId: number,
    propertyId: number,
    start: Date,
    end: Date,
    scheduledOn: Date,
}