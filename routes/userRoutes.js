const express = require('express');
const router = express.Router();
let users = require('../models/usersArray');

const {getAllUsers, createNewUser, findOneUser, updateUser, deleteUser} = require('../controllers/userController');

// Gets all users
router.get('/all-users', getAllUsers)
// Get one user based on ID number.
router.get('/single-user/:id', findOneUser);

router.post('/create-user', createNewUser);

router.put('/update-user/:id', updateUser);

// Delete single user base on id parameter.
router.delete('/delete-user/:id', deleteUser)



module.exports = router;