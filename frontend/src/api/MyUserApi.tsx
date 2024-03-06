import { useAuth0 } from '@auth0/auth0-react'
import { useMutation } from 'react-query'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

type CreateUserRequest = {
  auth0Id: string
  email: string
}

// this is a custom hook that uses react-query to make a POST request to the /my/user endpoint
export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0()

  const createMyUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently()
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    if (!response.ok) {
      throw new Error('Failed to create user')
      // show what error was
      console.log('Error: ', response)
    }
  }

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyUserRequest)

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  }
}