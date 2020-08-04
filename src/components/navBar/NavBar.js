import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <dic className="container-md">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-link"
                                to="/home"
                            >
                                Inicio{" "}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-link"
                                to="/horario"
                            >
                                Horario
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Ajustes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Trabajadores
                            </a>
                        </li>
                    </ul>
                    <div className="ml-5">
                        <b>v1.1.17</b>
                    </div>
                </div>
            </dic>
        </nav>
    );
};
