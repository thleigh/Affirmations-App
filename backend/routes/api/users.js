require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const passport = require('passport');
const JWT_SECRET = process.env.JWT_SECRET;

//load user model
const User = require('../../models/User')

// GET api/users/test (Public)
router.get('/test', (req, res) => {
    res.json({ msg: 'User endpoint OK'})
});

//P Post api/users/register (Public)
router.post('/register', (req, res) => {
    //Find user by email
    User.findOne({email: req.body.email})
    .then(user => {
        if(user) {
            return res.status(400).json({msg: 'Email already exists'});
        } else {
            // create a new user
            const newUser = new User({
                name: req.body.name, 
                email: req.body.email,
                password: req.body.password
            });
            // salt and hash the password, then save the user
            bcrypt.genSalt(10, (error, salt) => {
                bcrypt.hash(newUser.password, salt, (error, hash) => {
                    if(error) throw error;
                    // Change the password to the hash
                    newUser.password = hash;
                    newUser.save()
                    .then(createdUser => res.json(createdUser))
                    .catch(error => console.log(error)) 
                })
            });
        }
    })
})

module.exports = router;