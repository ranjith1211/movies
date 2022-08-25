import "./App.css";
import LoginForm from "./components/LoginForm";
import "./index.css";
import Movie from "./components/Movie";

import React, { useState } from "react";

function App() {
  const adminUser = [
    { name: "Jezz", email: "jeremy@osbourne.com", password: "hairblair" },
    { name: "Mark", email: "mark@corrigan.com", password: "mark_1234" },
    { name: "Super hans", email: "super@hans.com", password: "crack" },
    { name: "Big suze", email: "posh@me.com", password: "breakfast" },
    { name: "Alan Johnson", email: "beemer@bmw.com", password: "fivehundred" },
  ];

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    let check = adminUser.find((e) => {
      if (e.email === details.email && e.password === details.password) {
        return true;
      }
    });
    // check = check.find(true);
    console.log(check, "check");
    if (check) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Details Do Not Match");
      console.log("Details do not match");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>

          <Movie />
          <button className="btn" onClick={Logout}>
            Logout
          </button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
