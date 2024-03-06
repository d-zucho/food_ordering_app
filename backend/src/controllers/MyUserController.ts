import { Request, Response } from 'express'
import User from '../models/user'

// create a function to handle the request to /api/my/user to create user
const createCurrentUser = async (req: Request, res: Response) => {
  // 1. check if user exists
  // 2. if not, create the user
  // 3. return the user object to frontend / calling client
  try {
    // check if user exists
    const { auth0Id } = req.body

    const existingUser = await User.findOne({ auth0Id })
    if (existingUser) {
      // 200 status code means the request has succeeded
      return res.status(200).send()
    }

    // create the user
    // req.body contains the user object
    const newUser = new User(req.body)

    // save the user to the database
    await newUser.save()

    // 201 status code means the request has been fulfilled and has resulted in one or more new resources being created
    res.status(201).json(newUser.toObject())
  } catch (error) {
    console.log('ERROR: ', error)
    res.status(500).json({ message: 'Error creating new user!' })
  }
}

export default {
  createCurrentUser,
}
