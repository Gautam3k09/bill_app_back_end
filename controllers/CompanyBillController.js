const { response } = require("express");
const BillSchema = require("../models/BillSchema");
module.exports={
    postCompnaybill: async(req, res) => {
      console.log(req.body.data[0].particular);
      // const i=0;
      const data=[];
      for(let i = 0 ;i < req.body.data.length;i++){
                const itemdata = {itemName:req.body.data[i]?.particular,
                quantity:req.body.data[i]?.qty,
                rate:req.body.data[i]?.rate,
                pcs:req.body.data[i]?.pcs,
                amount:req.body.data[i]?.amount,
                igst:req.body.data[i]?.igst,
                igstamount:req.body.data[i]?.igstamount,
                cgst:req.body.data[i]?.cgst,
                cgstamount:req.body.data[i]?.cgstamount,
                sgst:req.body.data[i]?.sgst,
                sgstamount:req.body.data[i]?.sgstamount,
                amountwithtax:req.body.data[i]?.amountwithtax
          }
          data.push(itemdata)
        }
        try {
          const result=await BillSchema.insertMany( {
            address:req.body.Address,
            billNo:req.body.billNo,
            companyName:req.body.companyName,
            grandTotal:req.body.totalAmount,
            grandTotalInWords:req.body.amountWord,
            gstNo:req.body.gstNo,
            item : data
          });
          res.json(result);
        } catch (error) {
          console.log(error,'err');
          response.status(500).send(error);
        }
    },

    
    getCompnaybill: async(req, res) => {
  
        try {
          // const result = await BillSchema.find({employee_company:req.params.data})
          const result = await BillSchema.find()
          res.json(result);
        } catch (error) {
          console.log(error);
        }
    },

//     delcompanydata: async(req, res) => {
//       console.log(req.params);
//       try {
//       const result = await companyModel.findByIdAndRemove({_id: req.params.comid})
//       console.log(result, "result");
//        res.json(result);
//       } catch (error) {
//         console.log(error);
//       }
//   },

}