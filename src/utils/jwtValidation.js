const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader) return res.status(401).send({ msg: 'Não autorizado!' })
    const token = authHeader.split(' ')[1]
    const secret = process.env.SECRET

    try {
        jwt.verify(token, secret)
        next()
    } catch { res.status(401).send({ msg: 'Token inválido ou expirado!' }) }
}

module.exports = verifyToken