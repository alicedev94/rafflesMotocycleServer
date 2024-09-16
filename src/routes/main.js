const { Router } = require("express");
const router = Router();
const {
  findAll,
  newUser,
  updateUser,
  deleteUser,
} = require("../controllers/main");

// GET
router.get("/", async (req, res) => {
  const rta = await findAll();
  res.json(rta);
});

// POST
router.post("/newUser", async (req, res) => {
  await newUser(req.body);
  res.json(req.body);
});

router.post("/signin", async (req, res) => {
  // manejar las respuestas del servidor
  console.log(req.body);
  res.json({
    status: 200
  });
});

// PUT
router.put("/updateUser/:id", async (req, res) => {
  const name = req.body.name;
  console.log(name);
  await updateUser(req.params["id"], name);
  res.json({ update_records: name });
});

// DELETE
router.delete("/deleteUser/:id", async (req, res) => {
  const rta = await deleteUser(req.params["id"]);
  res.json({ deleted_records: rta });
});

module.exports = router;
