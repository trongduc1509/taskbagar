const express = require("express");
const app = express();
const cors = require("cors");
const mainRoutes = require("./routes/index");

app.use(cors());
app.use('/', mainRoutes);

const port = 8000;
app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
})