import React from 'react'

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
                        <a href="/" class="bi-person custom-icon me-3"><h1 style={{display: 'none'}} >texto invisible</h1></a>

                        <a href="/" class="bi-bag custom-icon"><h1 style={{display: 'none'}} >texto invisible</h1></a>
                    </div>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <a class="nav-link active" href="/">Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/">Sobre nosotros</a>
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