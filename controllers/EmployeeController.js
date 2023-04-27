const { response } = require("express");
const employeeModel = require("../models/EmployeeSchema");

module.exports={
    postemployeedata: async(req, res) => {
        const employeedata={
            employee_name:req.body.empdata.EmpName,
            employee_role:req.body.empdata.EmpRole,
            employee_company:req.body.compname
        }
        try {
          const result=await employeeModel.create(employeedata);
          res.json(result);
        } catch (error) {
          response.status(500).send(error);
        }
    },
    checkemployeedata:async(req,res)=>{
      var empname;
      var empcomp;
      var data=[];
      data=req.params.data;
      empname=data.split(",")[0];
      empcomp=data.split(",")[1];
      console.log(empname,empcomp);
      var noUser;
        try {
        const result = await employeeModel.find({employee_name:empname
        ,employee_company:empcomp});
        if(result.length>0){
          console.log(result);
          noUser=false;
        }
        else{
          noUser=true;
        }
        console.log(noUser);
        res.json(noUser);
        } catch (error) {
          console.log(error);
        }
    },
    getemployeedata: async(req, res) => {
        try {
        const result = await employeeModel.find({employee_company:req.params.data})
         res.json(result);
        } catch (error) {
          console.log(error);
        }
    },
    delemployeedata: async(req, res) => {
        console.log(req.params);
        try {
        const result = await employeeModel.findByIdAndRemove({_id: req.params.userid})
         res.json(result);
        } catch (error) {
          console.log(error);
        }
    },

}