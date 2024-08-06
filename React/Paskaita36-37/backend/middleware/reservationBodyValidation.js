import Joi from "joi";
import JoiDate from "@joi/date";

const extendedJoi = Joi.extend(JoiDate);

const reservationSchema = Joi.object({
  name: extendedJoi.string().min(3).max(20).required(),
  reservationDate: extendedJoi.date().min("now").format("YYYY-MM-DD HH:mm").required(),
  phone: extendedJoi.string().min(12).max(12).required()
});

export async function validateReservationBody(req, res, next) {
  const { error } = reservationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
}
