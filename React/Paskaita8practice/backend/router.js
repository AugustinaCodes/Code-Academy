import express from "express";
import { addUserList, getUserList } from "./controller.js";

const router = express.Router();

router.get("/userlist", getUserList);
router.post("/userlist", addUserList);

export default router;