var items = require("../data/sephoraData.json");
var Products = require("./db/products");

var insertAllItems = function(items) {
  return items.map(item =>
    Products.create({
      brand: item.brand,
      product_name: item.product_name,
      product_price: item.product_price,
      product_rating: item.product_rating,
      product_loves: item.product_loves,
      product_img: item.product_img
    })
      .then(() => console.log("Items added!"))
      .catch(e => console.error(e, "Unable to add item to database"))
  );
};

Products.sync({ force: true })
  .then(() => {
    Promise.all(insertAllItems(items))
      .then(() => {
        console.log("All items inserted into DB");
        process.exit();
      })
      .catch(e => console.error("Failed to seed DB: ", e));
  })
  .catch(e => console.error("Error", e));
