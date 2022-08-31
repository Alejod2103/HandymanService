import React from 'react'

const Footer = () => {
  return (
    <>
            <footer class="site-footer">
            <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-10 me-auto mb-4">
                        <h4 class="text-white mb-1" style={{fontSize: '18px'}}><a href="index.html" style={{fontSize: '18px'}}>Multilatino</a>-Services</h4>
                        <p class="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">Copyright © 2022 <strong>Multilatino-Services</strong></p>
                        <br></br>
                    </div>

                    <div class="col-lg-5 col-8">

                        <ul class="footer-menu d-flex flex-wrap">
                            <li class="footer-menu-item"><a href="none" class="footer-menu-link">Home</a></li>

                            <li class="footer-menu-item"><a href="none" class="footer-menu-link">Sobre Nosotros</a></li>

                            <li class="footer-menu-item"><a href="none" class="footer-menu-link">Contactanos</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-4">
                        <h5 class="text-white mb-3">Social</h5>

                        <ul class="social-icon">

                            <li><a href="none" class="social-icon-link bi-youtube"></a></li>

                            <li><a href="none" class="social-icon-link bi-whatsapp"></a></li>

                            <li><a href="none" class="social-icon-link bi-instagram"></a></li>

                            <li><a href="none" class="social-icon-link bi-skype"></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer