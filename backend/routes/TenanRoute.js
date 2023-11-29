import express from "express";
import {
	createTenan,
	getTenans,
	updateTenan,
	deleteTenan,
} from "../controller/Tenan.js";

const router = express.Router();

router.get("/tenans", getTenans);
// router.get("/tenans/:id", verifyUser, adminOnly, getUserbyId);
router.post("/tenans", createTenan);
router.patch("/tenans/:id", updateTenan);
router.delete("/tenans/:id", deleteTenan);

export default router;
