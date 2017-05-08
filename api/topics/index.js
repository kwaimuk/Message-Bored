const express = require('express');
const topics = express.Router();
const { Topic, User } = require('../../models');

topics.get('/', (req, res) => {
  Topic.all({
    include: [
      {
        model: User,
        as: 'Creator'
      }
    ]
  }).then( ( topics ) =>{
    console.log(topics);
    res.json( topics );
  });
});

topics.post('/', (req, res) => {
  Topic.create( req.body )
    .then( topics => {
      res.json( topics );
    })
    .catch( err => {
      res.json( err );
    });
});

topics.put('/:id', (req, res) => {
  Topic.update(
    { name : req.body.name }, // properties to be changed
    { where : { id : req.params.id } } // options for which instances to update
  )
  .then( result => { // [1]
    if( result[0] > 0 ){
      return Topic.findById( req.params.id );
    } else {
      throw "Did not update";
    }
  })
  .then( topic => { // { ... the topic ... }
    res.json( topic );
  })
  .catch( err => {
    res.json( err );
  });
});

module.exports = topics;