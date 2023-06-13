import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from './components/exports.js';
import React,{ lazy ,Suspense} from "react";

import{Home,SavedRecipes,CreateRecipes,Auth} from "./pages/exports";

function App() {
  
  return <div className="App">
    <Router>
      <Navbar />
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-recipes" element={<SavedRecipes />} />
        <Route path="/create-recipe" element={<CreateRecipes />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Suspense>
    </Router>
  </div>;
}

export default App;
