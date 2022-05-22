const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes/index");

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/', mainRoutes);

const port = 8000;
app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
})