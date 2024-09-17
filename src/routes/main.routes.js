const { Router } = require("express");
const router = Router();

const {
  findAll,
} = require("../controllers/main.controller");

router.get("/", async (req, res) => {
  const rta = await findAll();
  res.json(rta);
});

router.post("/signin", async (req, res) => {
  console.log(req.body);
  res.json({
    status: 200
  });
});


module.exports = router;
