import { Request, Response } from 'express'

// create a function to handle the request to /api/my/user to create user
const createCurrentUser = async (req: Request, res: Response) => {
  // 1. check if user exists
  // 2. if not, create the user
  // 3. return the user object to frontend / calling client
}

export default {
  createCurrentUser,
}
