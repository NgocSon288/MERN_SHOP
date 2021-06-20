const Product = require("./../models/Product");

module.exports = {
  add: async function (req, res, next) { 
    try {
      const { id } = req.params;
      const product = await Product.findOne({ _id: id });
      if (!product) {
        return res
          .status(400)
          .json({ success: false, message: "Product not found" });
      }

      if (req.session.cart == undefined) {
        req.session.cart = [];

        const cartItem = { id: id, amount: 1 };
        req.session.cart[0] = cartItem;

        return res.json({ success: true, message: "Add successfully" });
      } else {
        var check = 0;
        for (i = 0; i < req.session.cart.length; i++) {
          if (req.session.cart[i].id == id) {
            req.session.cart[i].amount++; 
            return res.json({ success: true, message: "Add successfully" });
            check = 1;
          }
        }

        if (check == 0) {
          const cartItem = { id: id, amount: 1 };
          req.session.cart[req.session.cart.length] = cartItem; 
          return res.json({ success: true, message: "Add successfully" });
        }
      }
      return res
        .status(400)
        .json({ success: false, message: "Data is not valid" }); 
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
      console.log("error");
    }
  },
  getAll: async function (req, res, next) {
    try {
      const list = [];
      for (i = 0; i < req.session.cart.length; i++) {
        const product = await Product.findOne({ _id: req.session.cart[i].id });
        const listItem = { ...product, amount: req.session.cart[i].amount };
        list.push(listItem);
      }
      return res.json({ success: true, data: list })
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  },
  delete: async function (req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findOne({ _id: id });
      if (!product) {
        return res
          .status(400)
          .json({ success: false, message: "Product not found" });
      }

      req.session.cart = req.session.cart.filter((item) => item.id != id);
      return res.json({ success: true, message: "Delete successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  },
};
