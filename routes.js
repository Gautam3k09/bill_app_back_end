const router = require("express").Router();

const { postCompnaybill
      ,getCompnaybill } = require("./controllers/CompanyBillController");


//bill routes
router.post("/add-bill",postCompnaybill);
router.get("/fetch-bill",getCompnaybill);
module.exports = router;