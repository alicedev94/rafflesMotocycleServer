const { Router } = require("express");
const router = Router();

const {
  findAll,
  deleteTicket
} = require("../controllers/ticket.controller");
const { id } = require("tedious/lib/data-types/null");

router.get("/find/ticket", async (req, res) => {
  const rta = await findAll();
  res.json(rta);
});

router.delete("/delete/ticket/:id", async(req, res) => {
  const response = await deleteTicket(id);
  res.status(200).json(response);
});

module.exports = router;
