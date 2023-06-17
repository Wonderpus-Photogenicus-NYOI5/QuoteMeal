const User = require('../models/User')
const userController = {}
const bcrypt = require('bcrypt')

userController.createUser = async (req, res, next) => {
    try {
        // console.log('body of request', req.body);
        const { username, password, firstName, lastName, email } = req.body
        if (username && password) {
            const salt = await bcrypt.genSaltSync(10)
            const bcpassword = await bcrypt.hashSync(password, salt)
            const updatedUser = {
                username,
                firstName,
                lastName,
                email,
                password: bcpassword,
            }
            const newUser = await User.create(updatedUser)
            console.log(newUser)
            res.locals.newUser = newUser
            // console.log('SUCESSFUL IN CREATE USER, maybe')
            return next()
        }
        next('One of username or password fields is missing')
    } catch (err) {
        next(err)
    }
}

userController.addFavRecipe = async (req, res, next) => {
    // console.log('IN FAV RECIPE');
    try {
        const { username, recipe } = req.body
        const userAddFav = await User.findOneAndUpdate(
            { username: username },
            { $push: { favRecipes: recipe } },
            { new: true }
        )
        res.locals.userAddFav = userAddFav
        return next()
    } catch (err) {
        next(err)
    }
}

userController.deleteRecipe = async (req, res, next) => {
    try {
        const { username, index } = req.body
        await User.findOneAndUpdate(
            { username: username },
            { $unset: { [`favRecipes.${index}`]: 1 } }
        )
        const deletedRecipe = await User.findOneAndUpdate(
            { username: username },
            { $pull: { favRecipes: null } },
            { new: true }
        )
        res.locals.deletedRecipe = deletedRecipe
        return next()
    } catch (err) {
        return next(err)
    }
}

userController.login = async (req, res, next) => {}

userController.login = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const result = await User.findOne({ username })
        if (!result) {
            next('user not found')
        }
        const compare = await bcrypt.compare(password, result.password)
        // console.log('SUCESSFUL LOG IN');
        if (compare) {
            res.locals.user = result
            return next()
        } else {
            next('incorrect password')
        }
    } catch (err) {
        return next(err)
    }
}

module.exports = userController
