
var express = require("express");
var router = express.Router();
//requiring in our playlist.js(model)
var db = require("../models");
//creating our routes for each page using our router
router.get("/", function(req, res) {
        res.render("index");
    });
    router.get("/playlist", function(req, res) {
        db.Search.findAll({}).then(function(dbSearch) {
            var jsonSearch = JSON.parse(JSON.stringify(dbSearch))
            var hbsObject = {
                searches: jsonSearch
            }
            console.log(jsonSearch)
            console.log(hbsObject)
            res.render("playlist", hbsObject)
        })
    })

    router.get("/api/getsearch", function(req, res) {

        db.Search.findAll({}).then(function(dbSearch) {   
            res.json(dbSearch)
        });
    });

router.post("/api/playlist", function(req, res) {
    console.log(req.body);
    db.Search.create({
        artist: req.body.artist,
        album: req.body.album,
        track: req.body.track
    }).then(function(dbSearch) {
        res.json(dbSearch);
    })
    
    
});
router.get("/api/getsearch", function(req, res) {

    db.Search.findAll({}).then(function(dbSearch) {   
        res.json(dbSearch)
    });
});

router.post("/playlist", function(req, res) {
    console.log(req.body);
    
    db.Search.create({
        artist: req.body.artist,
        album: req.body.album,
        track: req.body.track
    }).then(function(dbSearch) {
        res.json(dbSearch);
        
    })

    
    
    
});
     
router.put("/api/playlist/:id", function(req, res) {
   var newID = req.params.id
    db.Search.update({
        addTrack: req.body.addTrack
    }, {
        where: { 
            id: newID 
        }
    }).then(function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
//Exporting our route for our server
module.exports = router;