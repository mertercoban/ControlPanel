const User = require('../models/users')
const jwt = require('jsonwebtoken')
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    if (token) {
        jwt.verify(token, 'gizli kelime', (err, decodedToken) => {
            if (err) {
                res.redirect('/login')
            }
            else {
                next()
            }
        })

    } else {
        res.redirect('/login')

    }
}

const checkUser = (req, res, next) => {

    const token = req.cookies.jwt

    if (token) {
        jwt.verify(token, 'gizli kelime', async (err, decodedToken) => {
            if (err) {
                res.redirect('/login')
                res.locals.user = null
            }
            else {
                let user = await User.findByID(decodedToken.id)
                res.locals.user = user
                next()
            }
        })

    } else {
        res.locals.user = null
        next()
    }
}

module.exports = { requireAuth, checkUser}