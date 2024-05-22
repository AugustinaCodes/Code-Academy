import express from "express";
import { addPhone, deletePhoneById, getPhones, getPhonesById, updatePhoneById } from "./controllers.js";

const router = express.Router();

router.get("/phones", getPhones);

router.get("/phones/:id", getPhonesById);

router.post("/phones", addPhone);

router.put("/phones/:id", updatePhoneById);

router.delete("/phones/:id", deletePhoneById);

router.all("*", (req, res) => {
    res.status(404).json({ error: "Route not found" });
});

export default router;