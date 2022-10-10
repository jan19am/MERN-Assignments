const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors')

//require config file
require("./config/mongoose.config");

//Middleware
app.use( express.json() );
app.use( express.urlencoded({ extended: true}) );

app.use(
    cors({
        origin: "http://localhost:3000",
    }),
);

//Routes
const ProductRoutes = require('./routes/product.routes');
ProductRoutes(app);

app.listen( port, () => console.log(`Listening on port: ${ port }`));