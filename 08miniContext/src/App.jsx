
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h2>Hello My name is Karunasindhu Adak</h2>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
