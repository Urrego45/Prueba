import React, { Component } from 'react'
import { Routes, Route, Link, useLocation  } from "react-router-dom";

//Components

import Navigation from './views/Navs/NavigationHome';
import NavigationAd from './views/Navs/NavigationAdmin'

import Home from './views/Homes/Home';
import HomeAd from './views/Homes/HomeAdmin';

import Register from './views/Register';
import Login from './views/Login';

import Editar from './views/Editar';



export default class App extends Component {
  render() {



    return (
      <div>
          <div>
              <Routes>
                  <Route path="/editar/:id" element={<Editar />} />

                  <Route path="/" element={<Home/>} />
                  <Route path="/admin" element={<HomeAd />} />

                  <Route path="/register" element={<Register/>} />
                  <Route path="/login" element={<Login/>} />

                  {/* Crear */}

                  <Route path="/createAd" element={<Login/>} />

              </Routes>
          </div>
      </div>
    )
  }
}
