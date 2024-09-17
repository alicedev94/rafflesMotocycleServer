const express = require("express");
const mainRoutes = require('./routes/main.routes');
const customerRoutes = require('./routes/customer.routes');

const app = express();
const cors = require("cors");

const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRoutes);
app.use("/api/v1", customerRoutes);

app.listen(port, () => {
  console.log(`run on port ${port}`);
});
