import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { setLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext)
  console.log(data);

  useEffect(() => {
    setLocalStorage()
  
  
  },)

  const handleLogin = (email,password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')

    }else if(email == 'user@me.com' && password == '123') {
      setUser('employee');
    }else {
      console.log('Invalid credentials');
    }
  }
  
  
  

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}
export default App