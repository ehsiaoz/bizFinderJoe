var Business = require('../models/Business');
var express = require('express');
var router = express.Router();

//GET route returning ALL businesses
router.get('/businesses', function(req, res) {
  Business.find(function(err, businesses) {
    if (err) {
      return res.send(err);
    }
    res.json(businesses);
  });
});

//FROM JOE's example app-form-post
// app.post('/posts', function(req, res) {
//   setTimeout(function(){
//     res.json({
//       title: req.body.title,
//       category: req.body.category
//     });
//   }, 1000);
// });
//
// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/public/app.html');
// });


//POST route to create a new businesses
router.post('/businesses', function(req, res) {

  var business = new Business(req.body);

  business.save(function(err, doc) {
    if (err) {
      return res.send(err);
    }

    res.send(doc);
  });
});

//GET route for retrieving a single business
router.get('/businesses/:id', function(req, res) {
  console.log(req.params);
  Business.find({_id: req.params.id}, function (err, business) {
    if (err) {
      return res.send(err);
    }

    res.json(business);
  });
});

//PUT route to update a business
//lookup populate example for findandupdate method
router.put('/businesses/:id', function(req, res) {
  Business.findOne({_id: req.params.id}, function(err, business){
    if (err) {
      return res.send(err);
    }
    for (prop in req.body) {
      business[prop] = req.body[prop];
    }

    //save the business
    business.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.json({business});
    });
  });
});

//route for DELETING a business
router.delete('/businesses/:id', function(req, res) {
  Business.remove({
    _id: req.params.id
  }, function(err, business) {
    if (err) {
      return res.send(err);
    }

    res.json({message: 'Successfully deleted'});
  });
});

module.exports = router;
