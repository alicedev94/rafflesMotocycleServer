const { Router } = require("express");
const router = Router();

const {
  newCustomer,
  deleteCustomer,
  updateCustomer,
} = require("../controllers/customer.controller");

router.post("/newUser", async (req, res) => {
  await newCustomer(req.body);
  res.json(req.body);
});

router.put("/updateUser/:id", async (req, res) => {
  const change = req.body;
  await updateCustomer(req.params["id"], change);
  res.json({ update_records: change });
});

router.delete("/deleteUser/:id", async (req, res) => {
  const rta = await deleteCustomer(req.params["id"]);
  res.json({ deleted_records: rta });
});
