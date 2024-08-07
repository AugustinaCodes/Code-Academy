import { useState } from "react";

export default function NewReservationForm({ onSubmit, reservationData }) {
  const [name, setName] = useState(reservationData.name);
  const [registrationDate, setRegistrationDate] = useState(
    reservationData.reservationDate
  );
  const [phone, setPhone] = useState(reservationData.phone);

  async function handleOnSubmit(e) {
    e.preventDefault();

    const dateToSend = registrationDate.replace("T", " ");

    const body = {
      phone,
      name,
      reservationDate: dateToSend,
    };
    onSubmit(body);
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="name">Name</label>
      <input
        minLength={3}
        maxLength={30}
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="registrationDate">Registration Date</label>
      <input
        type="datetime-local"
        id="registrationDate"
        value={registrationDate}
        onChange={(e) => setRegistrationDate(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        minLength={12}
        maxLength={12}
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />{" "}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
