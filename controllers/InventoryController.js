const { response } = require("express");
const InventSchema = require("../models/InventorySchema");

module.exports={
    postInventorydata: async(req, res) => {
      console.log(req.body)
        const invtData={
            inventoryItem_Name:req.body.itemName,
            inventoryItem_Description:req.body.rate,
            inventoryItem_Rate:req.body.condition,
            inventoryItem_Condition:req.body.qty,
            inventoryItem_Qty:req.body.description,
        }
        try {
          const result=await InventSchema.create(invtData);
          console.log(result, "result");
          res.json(result);
        } catch (error) {
          response.status(500).send(error);
        }
    },

    getInventorydata: async(req, res) => {
        try {
        const result = await InventSchema.find()
        console.log(result, "result");
         res.json(result);
        } catch (error) {
          console.log(error);
        }
    },
  //   delcompanydata: async(req, res) => {
  //     console.log(req.params);
  //     try {
  //     const result = await InventSchema.findByIdAndRemove({_id: req.params.comid})
  //     console.log(result, "result");
  //      res.json(result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  // },

}