import express from "express";
import {
	createBarang,
	getBarangs,
	updateBarang,
	deleteBarang,
} from "../controller/Barang.js";

const router = express.Router();

router.get("/barangs", getBarangs);
// router.get("/tenans/:id", verifyUser, adminOnly, getUserbyId);
router.post("/barangs", createBarang);
router.patch("/barangs/:id", updateBarang);
router.delete("/barangs/:id", deleteBarang);

export default router;
