const actionsDataAccess = require("../models/actionsDataAccess");

exports.getAll = (req, res) => {
    actionsDataAccess
    .findAll()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err));
};

exports.getOne = (req, res) => {
  const actionId = req.params.id;
  actionsDataAccess
    .findOne(actionId)
    .then((student) => {
      if (student.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(student[0]);
      }
    })
    .catch((err) => res.status(500).send(err));
};

exports.createOne = (req, res) => {
  const { lastname, firstname, age, campus } = req.body;
  actionsDataAccess
      .addOne(req.body)
      .then((info) => res.status(201).json(info))
      .catch((err) => res.status(500).send({ err }));
};

exports.updateOne = (req, res) => {
  const actionId = req.params.id;
  const { lastname, firstname, age, campus } = req.body;
  actionsDataAccess
      .replaceOne(actionId, req.body)
      .then((info) => res.status(201).json(info))
      .catch((err) => res.status(500).send({ err }));
};

exports.deleteOne = (req, res) => {
  const actionId = req.params.id;

  actionsDataAccess
    .removeOne(actionId)
    .then((info) => {
      if (info) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => res.status(500).send({ err }));
};