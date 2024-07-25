import { CarRental } from "./car-rental";
import { FlightBooking } from "./flight-booking";
import { HotelReservation } from "./hotel-reservation";

export class TravelFacade {
    bookCompletePackage() {
        new FlightBooking().bookFlight();
        new HotelReservation().bookRoom();
        new CarRental().rentCar();
    }
}