const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  inventoryItem_Name: {
    type: String,
    required: true
  },
  inventoryItem_Description: {
    type: String,
    required: true
  },
  inventoryItem_Rate: {
    type: String,
    required: true
  },
  inventoryItem_Condition: {
    type: String,
    required: true
  },
  inventoryItem_Qty: {
    type: String,
    required: true
  },
  
});

module.exports = mongoose.model("InventorySchema", InventorySchema);