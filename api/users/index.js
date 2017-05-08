/*jshint esversion:6*/
const express = require('express');
const users = express.Router();
const { User } = require('../../models');
/*
 * same as
 * const db = require('../../models');
 * const User = db.User;
 */

users.get('/', (req, res) => {
  User.all().then( ( users ) =>{
    res.json( users );
  });
});

users.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  }).then( (user) => {
    res.json(user);
  });
});



users.post('/', (req, res) => {
  User.create( req.body )
    .then( res.json.bind(res) )
    .catch( res.json.bind(res) );
});

module.exports = users;