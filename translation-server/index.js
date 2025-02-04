const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8051;

app.use(
	cors({
		origin: "http://localhost:3000",
	}),
);

// Middleware pour servir les fichiers de traduction statiques
app.use("/locales", express.static(path.join(__dirname, "locales")));

app.listen(PORT, () => {
	console.log(
		`Translation server is running on http://localhost:${PORT}, serving translations from ${path.join(
			__dirname,
			"locales",
		)}`,
	);
});
