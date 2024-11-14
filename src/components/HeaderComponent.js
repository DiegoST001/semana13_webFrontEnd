import React from "react";

const HeaderComponent = () => {
    return (
        <header className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">Mi Aplicación</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/clientes">Clientes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/productos">Productos</a> {/*-------- */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/add-cliente">Agregar Cliente</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/add-producto">Agregar Producto</a> {/*-------- */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">Acerca de</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderComponent;
