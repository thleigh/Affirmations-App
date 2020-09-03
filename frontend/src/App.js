import React, {useEffect, useState} from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import Welcome from './components/Welcome.js'
import About from './components/About'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'

const PrivateRoute = ({component: Component, ...rest}) => {
  const user = localStorage.getItem('jwtToken')
  return <Route {...rest} render={(props) => {
    return user ? <Component {...rest} {...props} /> : <Redirect to="/login"/>
  }}
  />
}

function App() {

  //set state values
  let [currentUser, setCurrentUser] = useState('');
  let [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false)
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'))
      setAuthToken(localStorage.jwtToken)
      setCurrentUser(token)
      setIsAuthenticated(true)
    }
  }, []);

  let nowCurrentUser = (userData) => {
    console.log('nowCurrentUser is working...')
    setCurrentUser(userData)
    setIsAuthenticted(true)
  }

  const handleLogout = () => {
    if(localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken')
      setCurrentUser(null)
      setIsAuthenticated(false)
    }
  }

  console.log('Current User', currentUser)
  console.log('Authenticated', isAuthenticated)

  return (
    <div className="App">
      <NavBar handleLogout={handleLogout} isAuth={isAuthenticated}/>
      <div className="container mt-5">
        <Switch>
          <Route path="/signup" component={Signup}/>
          <Route 
            path="/login" 
            render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>}
          />

          <Route path="/about" component={Profile} user={currentUser}/>
          <PrivateRoute path="/profile" component={Profile} user={currentUser} />
          <Route exact path="/" component={Welcome}/>
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
