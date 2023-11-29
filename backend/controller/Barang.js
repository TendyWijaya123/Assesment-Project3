import Barang from "../models/BarangModel.js";

export const getBarangs = async (req, res) => {
	try {
		const response = await Barang.findAll();
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

export const createBarang = async (req, res) => {
	const { KodeBarang, NamaBarang, Satuan, HargaSatuan, Stok } = req.body;
	try {
		await Barang.create({
			KodeBarang: KodeBarang,
			NamaBarang: NamaBarang,
			Satuan: Satuan,
			HargaSatuan: HargaSatuan,
			Stok: Stok,
		});
		res.status(201).json({ msg: "Tenan berhasil ditambahkan" });
	} catch (error) {}
};

export const updateBarang = async (req, res) => {
	const barang = await Barang.findOne({
		where: {
			KodeBarang: req.params.id,
		},
	});
	if (!barang) return res.status(404).json({ msg: "User tidak  ditemukan" });
	const { NamaBarang, Satuan, HargaSatuan, Stok } = req.body;

	try {
		await Barang.update(
			{
				NamaBarang: NamaBarang,
				HargaSatuan: HargaSatuan,
				Satuan: Satuan,
				Stok: Stok,
			},
			{
				where: {
					KodeBarang: barang.KodeBarang,
				},
			}
		);
		res.status(200).json({ msg: "barang Updated" });
	} catch (error) {}
};

export const deleteBarang = async (req, res) => {
	const barang = await Barang.findOne({
		where: {
			KodeBarang: req.params.id,
		},
	});
	if (!barang) return res.status(404).json({ msg: "User tidak  ditemukan" });
	try {
		await barang.destroy({
			where: {
				KodeBarang: barang.KodeBarang,
			},
		});
		res.status(200).json({ msg: "Tenan deleted" });
	} catch (error) {}
};
