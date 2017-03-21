var Offer = require('../models/Offer');
var Business = require('../models/Business');
var express = require('express');
var router = express.Router();


//GET route to show all offers
router.get('/offers', function(req, res) {
  Offer.find(function(err, offers) {
    if (err) {
      return res.send(err);
    }
    res.json(offers);
  });
});

//POST route to create a new offer
router.post('/offers', function(req, res) {

  var newOffer = new Offer(req.body);

  newOffer.save(function(err, doc) {
    if (err) {
      return res.send(err);
    }

    else {
      var business = req.body.business;
      // Find business and push the new offer id into the Business' offers array
      Business.findOneAndUpdate({_id: business}, { $push: { "offers": doc._id } }, { new: true }, function(err, newdoc) {
        // Send any errors to the browser
        if (err) {
          res.send(err);
        }
        // Or send the newdoc to the browser
        else {
          res.send(newdoc);
        }
      });
    }
  });
});

  // var offerId = this._id;
  // var business = req.body.business;
  // Business.findOne({_id: business}, function(err, business){
  //   if (err) {
  //     return res.send(err);
  //   }
  //   this.offers = offerId
  //
  //   business.save(function(err){
  //     if (err) {
  //       return res.send(err);
  //     }
  //     res.json({business});
  //   });
  // });
// });

//GET route for retrieving a specific offer
router.get('/offers/:id', function(req, res) {
  console.log(req.params);
  Offer.findOne({_id: req.params.id}, function (err, offer) {
    if (err) {
      return res.send(err);
    }
    res.json(offer);
  });
});

//GET route for retrieving all offers for a specific business
router.get('/offers/business/:id', function(req, res) {
  console.log(req.params);
  Business.findOne({_id: req.params.id})
    .populate("offers")
    .exec(function(err, business) {
      if (err) {
        res.send(err);
      }
      res.json(business.offers);
    });
  });

//PUT route to update a offer
//lookup populate example for findandupdate method
router.put('/offers/:id', function(req, res) {
  Offer.findOne({_id: req.params.id}, function(err, offer){
    if (err) {
      return res.send(err);
    }
    for (prop in req.body) {
      offer[prop] = req.body[prop];
    }

    //save the offer
    offer.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.json({offer});
    });
  });
});

//route for DELETING a offer
router.delete('/offers/:id', function(req, res) {
  Offer.remove({
    _id: req.params.id
  }, function(err, offer) {
    if (err) {
      return res.send(err);
    }

    res.json({message: 'Successfully deleted'});
  });
});

module.exports = router;
