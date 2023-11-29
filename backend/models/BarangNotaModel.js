import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Nota from "../models/NotaModel.js";
import Barang from "../models/BarangModel.js";

const { DataTypes } = Sequelize;
const BarangNota = db.define(
	"BarangNota",
	{
		KodeNota: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		KodeBarang: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		JumlahBarang: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		HargaSatuan: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		
	},
	{
		freezeTableName: true,
	}
);

Nota.hasMany(BarangNota);
BarangNota.belongsTo(Nota, { foreignKey: "KodeNota" });

Barang.hasMany(BarangNota);
BarangNota.belongsTo(Barang, {
	foreignKey: "KodeBarang",
	targetKey: "KodeBarang",
});

export default BarangNota;
