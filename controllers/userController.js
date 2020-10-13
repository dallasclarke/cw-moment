let users = require('../models/usersArray');

module.exports = {
    getAllUsers: (req, res) => {
        return res.status(200).json({confirmation: 'success', users})
    },
    createNewUser: (req, res) => {
        if (!req.body.name || !req.body.email || !req.body.password) {
            return res.status(400).json({confirmation: 'fail', message: 'All inputs must be filled'});
        }
        // Check if user already exists.
        let existingUser = users.filter((user) => user.email === req.body.email);
        if (existingUser.length) {
            return res.status(400).send('User already exists')
        }
    
        const newUser = {};
    
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.id = String(users.length + 1);
        //add user to array.
        users.push(newUser);
        //Returning new user.
        return res.status(200).json({confirmation: "success", newUser});
    },
    findOneUser: (req, res) => {
        let foundUser = users.filter((user) => {
            if (user.id === req.params.id) {
                return res.json({confirmation: 'success', user})
            } 
        })
        if(!foundUser.length) {
            return res
            .status(400)
            .json({confirmation: 'fail', message: 'User does not exist'})
        }
    },
    updateUser: (req, res) => {
        let updateUser = req.body
        users.filter((foundUser) => {
            // find the user
            if (foundUser.id === req.params.id) {
                foundUser.name = updateUser.name 
                ? updateUser.name 
                : foundUser.name
    
                foundUser.password = updateUser.password
                ? updateUser.password
                : foundUser.password
                
            }
        });
        
        return res.status(200).json({message: "User Updates", users})
    },
    deleteUser: (req, res) => {
        // Filter user based on id parameter in address 
    let removeUser = users.filter((foundUser) => {
        return foundUser.id !== req.params.id
    })
    // Mutate users array and replace with removeUser array
    users = removeUser;
        return res.status(200).json({confirmation: "success", users});
    }

};

//createNewUser
//findOneUser
//updateUser
//deleteUser
