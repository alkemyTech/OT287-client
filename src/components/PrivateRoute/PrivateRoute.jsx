import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.userData)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!user ) {
      navigate('/');
    }
    if (location.pathname.includes("back-office") && user?.roleId !== 1) {
      navigate('/');
    }
  }, [user, navigate,location.pathname]);
  if ((user && user.roleId === 1) || (user && user.roleId === 2)) return children;
  return null
}

export default PrivateRoute
