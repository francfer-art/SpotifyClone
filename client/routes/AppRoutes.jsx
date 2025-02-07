import React from 'react'
import { Login } from '../components/Login'
import { Dashboard } from '../components/Dashboard'



const code = new URLSearchParams(window.location.search).get('code');

export const AppRoutes = () => {
  return (
    <>
    {code ? <Dashboard code={code}/> : <Login />}
    </>
  )
}
