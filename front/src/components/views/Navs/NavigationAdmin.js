import React, { Component } from 'react'
import './style.css'
import { Routes, Route, Link } from "react-router-dom";

export default class NavigationAdmin extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/admin">Home Admin</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            </ul>
                            <ul class="navbar-nav d-flex">
                                <li class="nav-item"><Link class="nav-link" to="/admin">Home Admin</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/">Salir</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
