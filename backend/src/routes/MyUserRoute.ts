import express from 'express'
import MyUserController from '../controllers/MyUserController'

const router = express.Router()

// if we get a request to /api/my/user, we will use the MyUserController and call the createCurrentUser function
router.post('/', MyUserController.createCurrentUser)

export default router
