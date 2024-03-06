import mongoose from 'mongoose'

// define the properties of the user
const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  addressLine1: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
})

// create a model for the user
// create a mongoose model called "User" based on the userSchema
const User = mongoose.model('User', userSchema)
export default User
