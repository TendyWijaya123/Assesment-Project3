import Kasir from "../models/KasirModel.js";
import argon2 from "argon2";

export const getKasirs = async (req, res) => {
	try {
		const response = await Kasir.findAll();
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getKasirById = async (req, res) => {
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

export const createKasir = async (req, res) => {
	const { KodeKasir, Nama, HP } = req.body;
	try {
		await Kasir.create({
			KodeKasir: KodeKasir,
			Nama: Nama,
			HP: HP,
		});
		res.status(201).json({ msg: "Kasir berhasil ditambahkan" });
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
