import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };

  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(true)
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoggedIn ? (<Home />) :

        showLogin ? (
          <div className="login-page">
            <div className="login-box">
              <h1>LOGIN</h1>
              <h2>FITFORGE</h2>

              <form onSubmit={handleLogin}>

                <input type="email"
                  placeholder="Enter your email"
                  required />

                <input type="password"
                  placeholder="Enter your password"
                  required />

                <button type="Submit">LOGIN</button>

              </form>
              <p>Don't have an account ?</p><a href="#">Register</a>
            </div>
          </div>) : (
          <div className="Welcome-Screen">
            <h1 className="welcome-text">
              WELCOME TO FITFORGE
            </h1>
          </div>
        )

      }

    </>

  );
}

export default App;