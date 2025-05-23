require("dotenv").config();

const express = require("express");
const path = require("node:path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT_TRAD || 8051;

app.use(
  cors({
    origin: `${process.env.SERVER_URL}:${process.env.PORT_FRONT}`,
  }),
);

// Middleware pour servir les fichiers de traduction statiques
app.use("/locales", express.static(path.join(__dirname, "locales")));

app.listen(PORT, () => {
  console.log(
    `Translation server is running on ${process.env.SERVER_URL}:${
      process.env.PORT_TRAD
    }, serving translations from ${path.join(__dirname, "locales")}`,
  );
});
