const User = require('./models/User')
const userController = {}

userController.createUser = (req, res, next) => {
    try {
        const { props } = req.body
        const newUser = User.create(props)
        res.locals.newUser = newUser
        return next()
    } catch (err) {
        next(err)
    }
}

userController.addFavRecipe = async (req, res, next) => {
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

module.exports = userController
