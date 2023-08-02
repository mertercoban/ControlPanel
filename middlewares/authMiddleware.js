const jwt = require('jsonwebtoken')
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    if (token) {
        jwt.verify(token,'gizli kelime',(err,decodedToken) => {
            if(err){
                res.redirect('/login')
            }
            else{
                next()
            }
        })

    }else{
        res.redirect('/login')
        
    }
}