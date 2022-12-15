import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import CuisinesPage from './pages/CuisinesPage';
import SearchedPage from './pages/SearchedPage';
import RecipesInformationPage from './pages/RecipesInformationPage';

function App() {
  return (
   <Routes>
    <Route path="/" element={<HomePage /> } />
    <Route path="/cuisine/:name" element={<CuisinesPage /> } />
    <Route path="/searched/:search" element={<SearchedPage /> } />
    <Route path="/recipesInformation/:id" element={<RecipesInformationPage /> } />
    <Route path="*" element={<NotFoundPage /> } />
   </Routes>
  );
}

export default App;
