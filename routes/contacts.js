const express = require('express');
const router = express.Router();

// @routes    GET api/contacts
// @desc      Get users contacts
// @access    Private
router.get('/', (req, res) => {
  res.send('Get allcontact');
});

// @routes    POST api/contacts
// @desc      Add new contact
// @access    Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @routes    PUT api/contacts/:id
// @desc      update contact
// @access    Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @routes    DELETE api/contacts/:id
// @desc      Delete contact
// @access    Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
