import jwt, { decode } from 'jsonwebtoken'
import { error } from '../utils/error.js'

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.authtoken
        if (!token) return next(error(403, 'Token is required'))

        const decodedData = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decodedData
        next()

    } catch (err) {
        next(error(err.status, `${err.message} - token verification failed `))
    }
}

export const verifyUser = async (req, res, next) => {
    try {
        verifyToken(req, res, () => {
            if (req.user?._id == req.params.userId) {    // req.user._id comes from verifyToken, req.params.id comes from route
                next()
            }
            else {
                next(error(403, 'You can change only your profile - change the token'))
            }
        })
    } catch (err) {
        next(error(err.status, `${err.message} - user verification failed `))
    }
}

export const verifySeller = async (req, res, next) => {
    try {
        verifyToken(req, res, () => {
            if (req.user?.isSeller) {
                next()
            }
            else {
                next(error(403, 'Only seller can access this route'))
            }
        })
    } catch (err) {
        next(error(err.status, `${err.message} - seller verification failed `))
    }
}