const express = require('express');
const router = require("express").Router();

const { postCompnaybill
      ,getCompnaybill } = require("./controllers/CompanyBillController");

const { postInventorydata,getInventorydata }=require("./controllers/InventoryController");

//bill routes
router.post("/add-bill",postCompnaybill);
router.get("/fetch-bill",getCompnaybill);

//invt routes
router.post("/add-item",postInventorydata);
router.get("/fetch-item",getInventorydata)

// //company routes
// router.post("/add-company", postCompnaydata);
// router.get("/get-company", getCompnaydata);
// router.delete("/delcom/:comid", delcompanydata);

// //emp routes
// router.post("/add-emp", postemployeedata);
// router.get("/get-emp/:data", getemployeedata);
// router.delete("/delemp/:userid", delemployeedata);
// router.get("/check-emp/:data", checkemployeedata)
module.exports = router;