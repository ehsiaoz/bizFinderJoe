var Category = require('../models/Category');
var express = require('express');
var router = express.Router();

//GET route returning ALL categories
router.get('/categories', function(req, res) {
  Category.find(function(err, categories) {
    if (err) {
      return res.send(err);
    }
    res.json(categories);
  });
});

//POST route to create a new category
router.post('/categories', function(req, res) {

  var category = new Category(req.body);

  category.save(function(err, doc) {
    if (err) {
      return res.send(err);
    }

    res.send(doc);
  });
});

//GET route for retrieving all businesses for a specific category
router.get('/categories/:id', function(req, res) {
  console.log(req.params);
  Category.findOne({_id: req.params.id})
    .populate("businesses")
    .exec(function(err, category) {
      if (err) {
        res.send(err);
      }
      res.json(category.businesses);
    });
  });

//PUT route to update a category
//lookup populate example for findandupdate method
router.put('/categories/:id', function(req, res) {
  Category.findOne({_id: req.params.id}, function(err, category){
    if (err) {
      return res.send(err);
    }
    for (prop in req.body) {
      category[prop] = req.body[prop];
    }

    //save the category
    category.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.json({category});
    });
  });
});

//route for DELETING a category
router.delete('/categories/:id', function(req, res) {
  Category.remove({
    _id: req.params.id
  }, function(err, category) {
    if (err) {
      return res.send(err);
    }

    res.json({message: 'Successfully deleted'});
  });
});

module.exports = router;
