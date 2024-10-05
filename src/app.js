const express = require("express");
const customerRoutes = require('./routes/customer.routes');
const tickletRoutes = require('./routes/ticket.routes');

const app = express();
const cors = require("cors");
const path = require('path');
const https = require("https");

const port = 3002;
const port2 = 3001;

const fs = require("fs");
var options = {
  key: fs.readFileSync("./ssl/code.key"),
  cert: fs.readFileSync("./ssl/code.crt"),
};


app.use(cors());
app.use(express.json());

app.use("/api/v1", customerRoutes);
app.use("/api/v1", tickletRoutes);

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// app.listen(port, () => {
//   console.log(`run on port ${port}`);
// });

https.createServer(options, app).listen(port2, () => { console.log("running https in: " + port2);});
