import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <>
                <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <a class="navbar-brand" href="/">
                        <strong><span>Multi</span>latino-Services</strong>
                    </a>

                    <div class="d-lg-none">
                        <Link to="/" class="bi-person custom-icon me-3"></Link>

                        <Link to="/" class="bi-bag custom-icon"></Link>
                    </div>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="about">Sobre nosotros</Link>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="products.html">Servicios</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="faq.html">Contactenos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </>
  )
}

export default Topbar