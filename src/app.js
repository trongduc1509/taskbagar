const express = require("express");
const app = express();

const mainRoutes = require("./routes/index");

app.use('/', mainRoutes);

const port = 5000;
app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
})