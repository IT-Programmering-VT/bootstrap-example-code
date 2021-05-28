import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import Login from "./pages/Login";
import ButtonBar from "./components/ButtonBar";
import Shop from "./components/Shop";

import "./App.css";

const initProfile = {
  publicRepos: null,
  website: null,
};
// initial state

function App() {
  // initialize state variables
  const [profile, setProfile] = useState(initProfile);

  // Function to get data form github API
  async function getProfile() {
    const response = await fetch("https://api.github.com/users/pickadolly");
    const json = await response.json();

    // update state with the response from the API
    setProfile({
      publicRepos: json.public_repos,
      website: json.blog,
    });
  }

  // load github profile data from API when page mounts
  useEffect(() => {
    getProfile();
    // only loading when the page first mounts
  }, []);

  return (
    <div className="container">
      <h1>Fetch data with useEffect and GitHub API</h1>
      <h3>{`Public repos: ${profile.publicRepos}`}</h3>
      <h3>{`Website: ${profile.website}`}</h3>
    </div>
  );
}

export default App;
