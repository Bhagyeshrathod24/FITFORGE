import { useState, useEffect } from "react";
import "./App.css";
import Home from "./home";
import FitnessForm from "./FitnessForm";
import Registration from "./Registration"


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/users/login",
        {
          method: "POST",
          headers:
          {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: loginEmail,
            password: loginpwd
          }
          )

        }
      );

      const responselogin = await response.text();
      let responsedata;

      try {
        responsedata = responselogin ? JSON.parse(responselogin) : {};
      }
      catch {
        responsedata = { message: responselogin };
      }

      if (!response.ok) {
        alert(responsedata.message || "Invalid email or password");
        return;
      }
      alert(responsedata.message || "Login Successful");

      setIsLoggedIn(true);
      setPage("home");



    }
    catch (error) {
      console.error("Error", error);
      alert("Cannot connect to backend please check your server.");
    }
  };
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(true)
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginpwd, setloginPwd] = useState("");

  const [page, setPage] = useState("home");
  /*const handleSubmit = (answer) => {
    console.log("USer fitness answer", answer);
    alert("Fitness Assessment Submited Successfully!");
    setPage("home");
  }*/

  const handleSubmit = async (answer) => {

    console.log("User fitness answer", answer);

    try {
      const response = await fetch(
        "http://localhost:8080/api/fitness",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(answer)
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save fitness data");
      }

      const savedfitness = await response.json();
      console.log("Saved fitness data", savedfitness);
      alert("Fitness assessment saved successfully");
      setPage("home");
    }
    catch (error) {
      console.error("Error", error);
      console.log("Could not save the fitness data...please check your backend");
    }
  };

  const handleRegisterPage = () => {
    setPage("registration");
  }

  const handleLoginPage = () => {
    setPage("login");
  }

  const handleRegister = async (userdata) => {
    console.log("Registration page detailes", userdata);

    try {
      const response = await fetch("http://localhost:8080/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(userdata)
        }
      );

      const responsetext = await response.text();

      let data;
      try {
        data = responsetext ? JSON.parse(responsetext) : {};
      }
      catch {
        data = { message: responsetext };
      }

      if (!response.ok) {
        alert(data.message || "Registration failed");
        return;
      }
      alert(data.message || "Registartion Successsful");
      setIsLoggedIn(true);
      setPage("home");
    }

    catch (error) {
      console.error("Registration Error", error);
      alert("cannot connect to backkend please check your server...");
    }
  };
  return (
    <>
      {isLoggedIn ? (page === "home" ? (<Home onExplore={() => setPage("fitness")} />) : (<FitnessForm onBack={() => setPage("home")}
        onSubmit={handleSubmit} />)
      ) :
        showLogin ? (
          page === "registration" ? (<Registration onLogin={handleLoginPage}
            onRegistration={handleRegister} />) :
            (<div className="login-page">
              <div className="login-box">
                <h1>LOGIN</h1>
                <h2>FITFORGE</h2>

                <form onSubmit={handleLogin}>

                  <input type="email"
                    value={loginEmail}
                    placeholder="Enter your email"
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required />

                  <input type="password"
                    value={loginpwd}
                    placeholder="Enter your password"
                    onChange={(e) => setloginPwd(e.target.value)}
                    required />

                  <button type="Submit">LOGIN</button>

                </form>
                <p>Don't have an account ?</p>
                <span onClick={handleRegisterPage}> REGISTER </span>

              </div>

            </div>)
        ) : (
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