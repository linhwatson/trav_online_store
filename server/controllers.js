const { Item } = require("./db");

exports.getItems = (req, res) => {
  Item.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(501).send({ alert: "Error getting all items" }, err);
    });
};

exports.getItem = (req, res) => {
  const unit_id = req.params.id;
  Item.findOne({ unit_id })
  .then((data) => {
    res.status(200).send(data)
  })
  .catch((err) => {
    res.status(501).send({ alert:`Error getting item with id ${id}` }, err);
  });
};