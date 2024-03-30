import React, { useEffect, useState } from 'react'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Loader from './components/Loader'

const App = () => {
  const [loading, setLoading] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      }else {
        dispatch(logout())
      }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className=' min-h-screen flex flex-wrap content-between bg-[#19191d]'>
      <div className=' w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : <Loader/>
}

export default App
