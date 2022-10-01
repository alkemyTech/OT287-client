import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const PrivateRoute = ({children}) => {
  const user = useSelector(state => state.auth.userData)
  const navigate = useNavigate()
  useEffect(() => {
    console.log(user)
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  if (user && user.roleId === 1) return children;
  return children;
}
