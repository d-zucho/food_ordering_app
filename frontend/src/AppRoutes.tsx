import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import AuthCallbackPage from './pages/AuthCallbackPage'

const AppRoutes = () => {
  return (
    // <Layout>
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path='/auth-callback' element={<AuthCallbackPage />} />
      <Route path='/user-profile' element={<span>User Profile Page</span>} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
    // </Layout>
  )
}

export default AppRoutes
