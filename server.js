const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
    app.listen( PORT, () => {
        console.log(`Server Running on ${PORT}`);
    });
});