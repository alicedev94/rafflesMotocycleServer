const { Router } = require("express");
const router = Router();
const multer = require("multer");

const {
  newCustomer,
  deleteCustomer,
  updateCustomer,
  findCustomer,
  newCustomerv2,
  examine,
  examineImg,
  examineDelete
} = require("../controllers/customer.controller");

router.get("/customers", async (req, res) => {
  try {
    const rta = await findCustomer();
    res.json(rta);
  } catch (error) {
    res.json(error);
  }
});

// Configuración de multer para manejar la subida de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post("/new/customer", upload.single("image"), async (req, res) => {

  // console.log(req.body)

  const { name, lastname, email, phone, reference } = req.body;
  const paymetReference = JSON.parse(reference);
  const form = { name, lastname, email, phone };

  // This to save image data
  if (paymetReference && paymetReference.length  > 0) {
    const firstPaymetReference = paymetReference[0].paymentReference;
    form.paymentReference = firstPaymetReference;
  }

  try {
    await newCustomerv2(form, paymetReference, req.file);
    res.status(200).json({ message: "Pago registrado" });
  } catch (error) {
    res.status(404).json(error.message);
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


router.get("/examine/:reference", async (req, res) => {
  try {
    const { reference } = req.params;
    const response = await examine(reference);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.get("/examineImg/:reference", async (req, res) => {
  try {
    const { reference } = req.params;
    const response = await examineImg(reference);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.delete("/examine/delete/:reference", async (req, res) => {
  console.log("s")
  try {
    const { reference } = req.params;
    const response = await examineDelete(reference);
    res.json(response);
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

// Test
router.get("/lol", async (req, res) => {
  try {
    res.send("Power by alice :3 in DONWEB..!");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
