import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { api } from './configs/api.js'

import { login, setLoading } from './app/features/authSlice.js'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Preview from './pages/Preview.jsx'
import Layout from './pages/Layout.jsx'
import Dashboard from './pages/Dashboard'
import ResumeBuilder from './pages/ResumeBuilder.jsx'

const App = () => {
   const dispatch = useDispatch()

   const getUserData = async () => {
      const token = localStorage.getItem('token')

      try {
         if (token) {
            const response = await fetch(`http://localhost:3333/users/data`, {
               method: 'GET',
               headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json',
               },
            })

            if (!response.ok) {
               throw new Error('Failed to fetch user data')
            }

            const data = await response.json()
            console.log(data)

            if (data.user) {
               dispatch(login({ token, user: data.user }))
            }
         }
      } catch (error) {
         console.log(error.message)
      } finally {
         dispatch(setLoading(false))
      }
   }

   useEffect(() => {
      getUserData()
   }, [])

   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />

            <Route path="app" element={<Layout />}>
               <Route index element={<Dashboard />} />
               <Route path="builder/:resumeId" element={<ResumeBuilder />} />
            </Route>

            <Route path="view/:resumeId" element={<Preview />} />
            <Route path="login" element={<Login />} />
         </Routes>
      </>
   )
}

export default App
