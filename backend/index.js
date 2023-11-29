import express from "express";
import cors from "cors";
import session from "express-session";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import dotenv from "dotenv";
import Barang from "./models/BarangModel.js";
import BarangNota from "./models/BarangNotaModel.js";
import Nota from "./models/NotaModel.js";
import Tenan from "./models/TenanModel.js";
import Kasir from "./models/KasirModel.js";
import TenanRoute from "./routes/TenanRoute.js";
import BarangRoute from "./routes/BarangRoute.js";
const app = express();
const APP_PORT = 5000;
app.use(
	cors({
		credentials: true,
		origin: "http://localhost:3000",
	})
);
// (async () => {
// 	try {
// 		await db.sync({ force: true });
// 		console.log("Database synchronized successfully.");
// 	} catch (error) {
// 		console.error("Error synchronizing database:", error);
// 	} finally {
// 		// Ensure to close the database connection after synchronization
// 		await db.close();
// 	}
// })();

app.use(express.json());
app.use(TenanRoute);
app.use(BarangRoute);

app.listen(APP_PORT, () => {
	console.log(`Server up and running... `);
});
