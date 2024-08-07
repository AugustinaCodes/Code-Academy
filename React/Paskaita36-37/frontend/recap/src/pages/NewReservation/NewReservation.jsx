import NewReservationForm from "../../components/NewReservationForm/NewReservationForm";
import axios from "axios";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function NewReservation() {
  async function handleSubmit(body) {
    await axios.post(API_HOST + "reservations", body);
  }

  return (
    <div>
      <NewReservationForm onSubmit={handleSubmit} />
    </div>
  );
}
