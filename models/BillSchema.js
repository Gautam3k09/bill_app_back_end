const mongoose = require("mongoose");

const CompanyBillSchemaSchema = new mongoose.Schema({

  address: {
    type: String,
    required: true
  },
  billNo: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  grandTotal: {
    type: Number,
    required: true
  },
  grandTotalInWords: {
    type: String,
    required: true
  },
  gstNo: {
    type: String,
    required: true
  },
  item:[{
              itemName: String,
              quantity:String,
              rate:String,
              pcs:String,
              amount:String,
              igst:String,
              igstamount:String,
              cgst:String,
              cgstamount:String,
              sgst:String,
              sgstamount:String,
              amountwithtax:String
  }]
  

} ,{ timestamps: true });

module.exports = mongoose.model("BillSchema", CompanyBillSchemaSchema);