const Author = require('../model/author.model');

module.exports = {
  getAll: (req, res) => {
    Author.find()
    .sort({name : "descending"})
      .then((allAuthors) => {
        console.log(allAuthors);
        res.json(allAuthors);
      })
      .catch((err) => {
        console.log(`error in getAll:${err}`);
        res.json(err);
      });
  },

  create: (req, res) => {
    console.log(req.body);
    Author.create(req.body)
      .then((newAuthor) => {
        console.log(newAuthor);
        res.json(newAuthor);
      })
      .catch((err) => {
        console.log(`error in create:${err}`);
        res.json(err);
      });
  },

  getOne: (req, res) => {
    console.log(req.params.id);
    Author.findById(req.params.id)
      .then((oneAuthor) => {
        console.log(`oneAuthor: ${oneAuthor}`);
        res.json(oneAuthor);
      })
      .catch((err) => {
        console.log(`error in getOne:${err}`);
        res.json(err);
      });
  },

  update: (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((udatedAuthor) => {
        console.log(udatedAuthor);
        res.json(udatedAuthor);
      })
      .catch((err) => {
        console.log(`error in update:${err}`);
        res.json(err);
      });
  },

  delete: (req, res) => {
    console.log(req.params.id);
    Author.findByIdAndRemove(req.params.id)
      .then((removedAuthor) => {
        console.log(removedAuthor);
        res.json(removedAuthor);
      })
      .catch((err) => {
        console.log(`error in delete:${err}`);
        res.json(err);
      });
  }
};