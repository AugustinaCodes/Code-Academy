import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    reservationDate: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    }
})

export default mongoose.model("Reservation", reservationSchema)