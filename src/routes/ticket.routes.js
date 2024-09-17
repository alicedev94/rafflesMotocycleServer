const { Router } = require("express");
const router = Router();

const {
  findAll,
} = require("../controllers/ticket.controller");

router.get("/ticket", async (req, res) => {
  const rta = await findAll();
  res.json(rta);
});

module.exports = router;
