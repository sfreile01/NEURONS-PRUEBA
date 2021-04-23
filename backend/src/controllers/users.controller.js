const usersCtrl = {};

const Usermodel = require('../models/Users')


usersCtrl.createUser = async (req, res) => {

    const { name, username, password, admin } = req.body;
    //console.log(title);
    const newUser = new Usermodel({
        name, 
        username, 
        password,
        admin
    });
    console.log(newUser);
    await newUser.save()
    res.json({message: 'User saved'})


}

usersCtrl.getUser = async (req, res) => {
    //console.log(req.params.id);
    const {username} = req.body; // [ {}, {}, {}] 
    res.json(username)
}
usersCtrl.getUsers = async (req, res) => {
    const {username} = req.body; // [ {}, {}, {}] 
    res.json(username)
}

usersCtrl.updateUser = async (req, res) =>{
    const {name, username, password, admin} = req.body
    await Usermodel.findByOneAndUpdate(req.params.id, {
        name,
        username,
        password,
        admin
    })
    res.json({message: 'User updated'})
}


module.exports = usersCtrl