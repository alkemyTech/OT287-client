import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const user = useSelector(state => state.auth.userData)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  if (user && user.roleId === 1) return children;
  return children;
}

export default PrivateRoute