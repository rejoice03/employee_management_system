import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { setLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"


const App = () => {
  const [user, setUser] = useState(null);
  const [loggedUserData, setLoggedUserData] = useState(null)
  const authData = useContext(AuthContext)
  

  // useEffect(() => {
  //   if(authData) {
  //     const loggedInuser = localStorage.getItem('loggedInUser');
  //     if (loggedInuser) {
  //       setUser(loggedInuser.role)
  //     }
  //   }
  
  
  // },[authData])

  const handleLogin = (email,password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loddedInUser', JSON.stringify({role:'admin'}));

    }else if(authData) {
      const employee = authData.employees.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee');
        setLoggedUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}));
      }
    }else {
      console.log('Invalid credentials');
    }
  }
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : (user == 'employee'?<EmployeeDashboard data={loggedUserData} />: null)}
      {/* <EmployeeDashboard /> 
      <AdminDashboard /> */}
    </>
  )
}
export default App