 
const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const TOKEN_SECRET = 'dhfsgdfhsjdhfjhsjdhfjs2673372'
 

const userCtrl = {


    registerUser: async (req, res) => {

        console.log(req.body)
        const { name, email } = req.body;

        console.log(req.body.password)
        try {
            const emailExit = await User.findOne({
                email: req.body.email
            });

            if (emailExit) return res.status(400).send("Email already exists");

            // hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            const password = hashedPassword
            console.log('hashedPassword', hashedPassword)
            // create new user
            const user = new User({
                name,
                email,
                password,


            });

            try {
                const savedUser = await user.save();
                res.send(savedUser);
            } catch (error) {
                res.status(400).send(error);
            }
        }

        catch (err) {
            return res.status(500).json({ msg: err })
        }

    },


    login: async (req, res) => {
        console.log(req.body)

        try {
            const user = await User.findOne({ email: req.body.email });

            console.log(user);

            if (!user) return res.status(400).send("Email is wrong");
            // checking password
            const validPass = await bcrypt.compare(req.body.password, user.password);
            if (!validPass) return res.status(400).send("Invalid password");

            // creat and assign a token
            const token = jwt.sign({ _id: user._id }, TOKEN_SECRET);

            res.status(200).send({ user: user, token: token });

            // res.header("auth-token", token).send({ token: token });

        }
        catch (err) {
            return res.status(500).json({ msg: err.message })
        }

    }




}

module.exports = userCtrl


