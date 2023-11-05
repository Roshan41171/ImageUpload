import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Products from './Components/Products/Products';
import List from './Components/Products/List';
import Search from './Components/Products/Search';
import Add from './Components/Products/Add';


// import Form from './Components/Form';
// import Page from './Components/Page';

const App = () => {
  return (
    <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/product'>Product</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Products />}>
            <Route path="add" element={<Add />} />
            <Route path="search" element={<Search />} />
            <Route path="list" element={<List />} />
          </Route>
        </Routes>
    </Router>
  )
}

export default App;