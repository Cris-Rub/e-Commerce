import { createContext, useState, useEffect } from 'react'
import { getSingleUser } from '../services/userServices'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

export const AuthContext = createContext()

export function AuthProvider (props) {
  const [isAuth, setIsAuth] = useState(false) // Autenticacion
  const [user, setUser] = useState(null) // Informacion del usuario
  const [userData, setUserData] = useState({})

  const loginUser = (token) => {
    window.localStorage.setItem('token', token) // Guardar token en localStorage
    const decoded = jwt_decode(token)
    setUser(decoded)
    setIsAuth(true)
  }
  const logout = () => {
    window.localStorage.removeItem('token') // Se elimina el token del usuario
    setIsAuth(false)
    setUser(null)
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      const decoded = jwt_decode(token)
      setUser(decoded)
      setIsAuth(true)
    }
  }, [])
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await getSingleUser(user.id)
        if (result.status === 200) {
          setUserData(result.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Dashboard: ' + error.message)
      }
    }
    fetchUserData()
  }, [isAuth])

  const values = {
    isAuth,
    user,
    loginUser,
    logout,
    userData
  }

  return (
    <AuthContext.Provider value={values}>
      {props.children}
    </AuthContext.Provider>
  )
}
