import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class componentName extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">


                <div className='container'>
                    <Link className="navbar-brand" to="/">Au Revoir</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Descuentos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Menú</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/CreateUsers">Logup</Link>
                        </li>

                       
                    </ul>
                </div>

            </nav>

        )
    }
}
