const express = require("express");
const customerRoutes = require('./routes/customer.routes');
const tickletRoutes = require('./routes/ticket.routes');

const app = express();
const cors = require("cors");

const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/v1", customerRoutes);
app.use("/api/v1", tickletRoutes);

app.listen(port, () => {
  console.log(`run on port ${port}`);
});
