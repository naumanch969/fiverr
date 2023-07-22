import Gig from '../models/gig.js'
import bcrypt from 'bcryptjs'
import { error } from '../utils/error.js'



export const getGigs = async (req, res, next) => {
    try {
        const { new: new_gigs } = req.query

        const gigs = new_gigs
            ? await Gig.find().sort({ _id: -1 }).limit()
            : await Gig.find()
        res.status(200).json({ result: gigs, success: true, message: 'Gigs fetched successfully' })

    } catch (err) {
        next(error(500, `${err.message} - getGigs`))
    }
}

export const getGig = async (req, res, next) => {
    try {

        const { gigId } = req.params

        const gig = await Gig.findById(gigId)
        if (!gig) return next(error(400, 'gig not exist'))

        const { password, ...result } = gig._doc
        res.status(200).json({ result, success: true, message: 'Gig fetched successfully' })


    } catch (err) {
        next(error(500, `${err.message} - getGig`))
    }
}

export const getGigStats = async (req, res, next) => {
    try {
        const data = await Gig.aggregate([
            {
                $project: { month: { $month: '$createdAt' } }
            },
            {
                $group: { _id: '$month', total: { $sum: 1 } }
            }
        ])
        res.status(200).json({ result: data, success: true, message: 'Stats fetched successfully' })
    } catch (err) {
        next(error(500, `${err.message} - getGigStats`))
    }
}

export const createGig = async (req, res, next) => {
    try {

        const updatedGig = await Gig.create({ userId: req.user._id, ...req.body })
        res.status(200).json({ result, success: true, message: 'Gig created successfully' })

    } catch (err) {
        next(error(500, `${err.message} - createGig`))
    }
}

export const updateGig = async (req, res, next) => {
    try {
        const { gigId } = req.params

        const gig = await Gig.findById(gigId)
        if (!gig) return next(error(400, 'Gig not exist'))

        if (req.body.password) req.body.password = await bcrypt.hash(req.body.password, 12)

        const updatedGig = await Gig.findByIdAndUpdate(gigId, { $set: req.body }, { new: true })
        const { password, ...result } = updatedGig._doc
        res.status(200).json({ result, success: true, message: 'Gig updated successfully' })

    } catch (err) {
        next(error(500, `${err.message} - updateGig`))
    }
}

export const deleteGig = async (req, res, next) => {
    try {
        const { gigId } = req.params
        const gig = await Gig.findById(gigId)

        if (gig.userId != req.user._id) return next(error(403, 'you can delete only your gig'))


        await Gig.findByIdAndDelete(gigId)
        res.status(200).json({ success: true, message: 'Gig deleted successfully' })

    } catch (err) {
        next(error(500, `${err.message} - deleteGig`))
    }
}