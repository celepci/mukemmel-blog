import React from 'react'
import Link from 'next/link'


const Footer = () => (
    <div>
        <footer>
            <div className="container">
                <div className="content">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <Link href="">
                                <a className="logo">
                                    <div className="icon"><img src="/img/pineapple2.svg" /></div>
                                    <div className="name">Muhammet.Celepci</div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-8">
                            <div className="social">
                                <Link href="">
                                    <a className="item"><i className="fab fa-facebook-f"></i></a>
                                </Link>
                                <Link href="">
                                    <a className="item"><i className="fab fa-twitter"></i></a>
                                </Link>
                                <Link href="">
                                    <a className="item"><i className="fab fa-linkedin"></i></a>
                                </Link>
                                <Link href="">
                                    <a className="item"><i className="fab fa-youtube"></i></a>
                                </Link>
                                <Link href="">
                                    <a className="item"><i className="fab fa-instagram"></i></a>
                                </Link>
                                <Link href="">
                                    <a className="item"><i className="fab fa-github"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="linkler"><Link href="#">Blog</Link><Link href="#">Contact</Link></div>
                        </div>
                    </div>
                </div>
                <div className="copyright">Muhammet Celepci | 2020</div>
            </div>
        </footer>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
        <script src="/js/all.js"></script>
    </div>
)

export default Footer;

