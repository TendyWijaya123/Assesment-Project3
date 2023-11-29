import { Sequelize } from "sequelize";

const db = new Sequelize("Assesment", "postgres", "Tendywijaya123", {
	host: "localhost",
	dialect: "postgres",
});

export default db;
