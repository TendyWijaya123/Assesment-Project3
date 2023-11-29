import Tenan from "../models/TenanModel.js";
import argon2 from "argon2";

export const getTenans = async (req, res) => {
	try {
		const response = await Tenan.findAll();
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getTenanbyId = async (req, res) => {
	try {
		const response = await Tenan.findOne({
			attributes: ["uuid", "name", "email", "role"],
			where: {
				uuid: req.params.id,
			},
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const createTenan = async (req, res) => {
	const { KodeTenan, NamaTenan, HP } = req.body;
	try {
		await Tenan.create({
			KodeTenan: KodeTenan,
			NamaTenan: NamaTenan,
			HP: HP,
		});
		res.status(201).json({ msg: "Tenan berhasil ditambahkan" });
	} catch (error) {}
};

export const updateTenan = async (req, res) => {
	const Tenans = await Tenan.findOne({
		where: {
			KodeTenan: req.params.id,
		},
	});
	if (!Tenans) return res.status(404).json({ msg: "User tidak  ditemukan" });
	const { NamaTenan, HP } = req.body;

	try {
		await Tenan.update(
			{
				NamaTenan: NamaTenan,
				HP: HP,
			},
			{
				where: {
					KodeTenan: Tenans.KodeTenan,
				},
			}
		);
		res.status(200).json({ msg: "Tenan Updated" });
	} catch (error) {}
};

export const deleteTenan = async (req, res) => {
	const tenan = await Tenan.findOne({
		where: {
			KodeTenan: req.params.id,
		},
	});
	if (!tenan) return res.status(404).json({ msg: "User tidak  ditemukan" });
	try {
		await Tenan.destroy({
			where: {
				KodeTenan: tenan.KodeTenan,
			},
		});
		res.status(200).json({ msg: "Tenan deleted" });
	} catch (error) {}
};
