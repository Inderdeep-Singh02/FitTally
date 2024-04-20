import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import Navbar from "./components/Navbar.component"
import ExerciseList from "./components/Exerciselist.component";
import EditExercise from "./components/EditExercise.component";
import CreateExercise from "./components/CreateExercise.component";
import CreateUser from "./components/CreateUser.component";



function App() {
  return (
    <Router>
      <div className="container">

      <Navbar />
      <br/>
      <Routes>

      <Route path = "/" exact element = { < ExerciseList/>} />
      <Route path = "/edit/:id" exact element = { <EditExercise/> } />
      <Route path = "/create"  exact element = { <CreateExercise/>}  />
      <Route path = "/user" exact element = { <CreateUser/>}  />

      </Routes>
      </div>
    </Router>
    // </BrowserRouter>
  );
}

export default App;
