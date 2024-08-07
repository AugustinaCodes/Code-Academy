import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Reservation from "../Reservation/Reservation";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function ReservationsContainer() {
  const [reservations, setReservations] = useState([]);

  function getReservations() {
    axios
      .get(API_HOST + "reservations")
      .then((response) => setReservations(response.data))
      .catch(() => alert("Something went wrong"));
  }

  useEffect(() => {
    getReservations();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Reservation Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((reservation) => (
          <Reservation
            key={reservation._id}
            reservationData={reservation}
            refetchData={getReservations}
          />
        ))}
      </tbody>
    </table>
  );
}
