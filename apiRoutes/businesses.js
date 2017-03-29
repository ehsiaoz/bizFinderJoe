var Business = require('../models/Business');
var Category = require('../models/Category');
var express = require('express');
var router = express.Router();

//GET route returning ALL businesses
router.get('/businesses', function(req, res) {


    var city = req.query.city;
    var category = req.query.category;
    var returnCat = '';
    console.log("city in route", city);
    console.log("category in route", category);


    if (category == undefined && city ==undefined) {

      Business.find(function(err, businesses) {
          if (err) {
              return res.send(err);
          }
          res.json(businesses);
      });

    }

    else if (category == undefined && city !=undefined) {

      Business.find({
          city: city
      }, function(err, businesses) {
          if (err) {
              return res.send(err);
          }
          res.json(businesses);
      });

    }

    else {

      Category.find({
          name: category
      }, function(err, cat) {
          if (err) {
              return res.send(err);
          }
          // returnCat = cat[0]._id;
          console.log("let's print our category we just found:")
          console.log(cat)
          console.log("--------------------------")
      }).then(function(cat) {

                  Business.find({
                      city: city,
                      category: cat[0]["_id"]
                  }, function(err, businesses) {
                      if (err) {
                          return res.send(err);
                      }
                      res.json(businesses);
                  }
                );
      });
    }



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
            return res.send(err, 400);
        }

        res.send(doc);
    });
});

//GET route for retrieving a single business
router.get('/businesses/:id', function(req, res) {
    console.log(req.params);
    Business.find({
        _id: req.params.id
    }, function(err, business) {
        if (err) {
            return res.send(err);
        }

        res.json(business);
    });
});

//PUT route to update a business
//lookup populate example for findandupdate method
router.put('/businesses/:id', function(req, res) {
    Business.findOne({
        _id: req.params.id
    }, function(err, business) {
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

            res.json({
                business
            });
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

        res.json({
            message: 'Successfully deleted'
        });
    });
});

module.exports = router;
