const express = require("express");
const Razorpay=require("razorpay");
const router = express.Router();


router.get("/createorder", async (req, res) => {
    var instance = new Razorpay({
        key_id: 'rzp_test_H63Iwu9sdwkPrq',
        key_secret: 'nWf4U8aJOQEEiEK7uyEiQhgB',
      });
    
      var options = {
        amount: 20000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11",
        payment_capture:1
      };
      instance.orders.create(options, function(err, order) {
        res.send(order);
      });
});

module.exports=router;
