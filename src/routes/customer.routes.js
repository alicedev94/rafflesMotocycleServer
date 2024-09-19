const { Router } = require("express");
const router = Router();

const {
  newCustomer,
  deleteCustomer,
  updateCustomer,
  findCustomer,
} = require("../controllers/customer.controller");

router.get("/customers", async (req, res) => {
  try {
    const rta = await findCustomer();
    res.json(rta);
  } catch (error) {
    res.json(error);
  }
});

router.post("/newUser", async (req, res) => {
  try {
    await newCustomer(req.body);
    res.json(req.body);
  } catch (error) {
    res.json(error);
  }
});

router.put("/updateUser/:id", async (req, res) => {
  try {
    const change = req.body;
    await updateCustomer(req.params["id"], change);
    res.json({ update_records: change });
  } catch (error) {
    res.json(error);
  }
});

router.delete("/deleteUser/:id", async (req, res) => {
  try {
    const rta = await deleteCustomer(req.params["id"]);
    res.json({ deleted_records: rta });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
