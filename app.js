const express = require("express");
const cors = require("cors");
const path = require("path");
const homeRoute = require("./routes/web/home.route")
const apiBooks = require("./routes/api/books.api")


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));



app.use("/", homeRoute)
app.use("/api/books", apiBooks);

app.listen(PORT, (err) => {
    console.log(err ? err : `Server is runnig on port ${PORT}`)
})