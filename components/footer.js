import React from 'react'
import Link from 'next/link'
//import $ from "jquery"


const Footer = () => (
    <div>
        <footer>
            <div className="container">
                <div className="content">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <Link href="/">
                                <a className="logo">
                                    <div className="icon"><img src="/img/pineapple2.svg" /></div>
                                    <div className="name">Muhammet.Celepci</div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-8">
                            <div className="social">
                                <Link href="#">
                                    <a className="item"><i className="fab fa-facebook-f"></i></a>
                                </Link>
                                <Link href="https://web.telegram.org/#/im?p=@celepci" prefetch={false}>
                                    <a className="item" target="_blank" rel="norefferer noopener"><i className="fab fa-telegram-plane"></i></a>
                                </Link>
                                <Link href="https://www.linkedin.com/in/mcelepci/" prefetch={false}>
                                    <a className="item" target="_blank" rel="norefferer noopener"><i className="fab fa-linkedin"></i></a>
                                </Link>
                                <Link href="https://instagram.com/mcelepci_" prefetch={false}>
                                    <a className="item" target="_blank" rel="norefferer noopener"><i className="fab fa-instagram"></i></a>
                                </Link>
                                <Link href="https://github.com/celepci" prefetch={false}>
                                    <a className="item" target="_blank" rel="norefferer noopener"><i className="fab fa-github"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="linkler">
                                <Link href="/"><a>Homepage</a></Link>
                                <Link href="/about"><a>About</a></Link>
                                <Link href="/blog"><a>Blog</a></Link>
                                <Link href="/contact"><a>Contact</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright"><i className="far fa-copyright"></i>Muhammet Celepci | 2020
                <a href="#" className="copyright-logo">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.000000 286.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,286.000000) scale(0.100000,-0.100000)" stroke="none">
                                <path d="M2063 2222 c-110 -39 -180 -113 -225 -237 -29 -83 -37 -283 -14 -373                                31 -123 103 -233 189 -292 l35 -24 -43 -86 c-97 -193 -245 -372 -330 -400 -43                                -14 -96 -8 -131 15 -31 20 -68 95 -83 165 -37 169 -34 629 4 900 9 58 18 139                                21 180 6 71 5 78 -18 105 -21 24 -34 29 -84 32 -119 8 -161 -38 -193 -214 -99                                -538 -250 -954 -406 -1120 -47 -50 -68 -65 -97 -70 -33 -5 -41 -2 -67 26 -114                                122 -136 531 -60 1116 21 167 18 203 -18 237 -21 19 -35 23 -93 23 -119 0                                -147 -40 -174 -256 -28 -223 -36 -341 -36 -546 0 -310 32 -506 110 -670 68                                -145 143 -198 275 -198 112 1 174 32 280 139 96 97 163 208 237 390 l53 128 8                                -83 c29 -326 127 -527 276 -569 92 -26 213 2 320 72 149 98 336 331 443 551                                23 49 23 49 63 43 22 -3 92 -9 155 -12 134 -8 166 2 194 60 24 50 21 91 -8                                114 -20 15 -48 20 -143 25 -134 7 -157 12 -148 36 48 116 85 318 85 455 0 175                                -38 265 -136 322 -62 36 -165 43 -241 16z m108 -228 c23 -25 24 -31 23 -157                                -1 -114 -5 -146 -30 -231 -16 -55 -34 -101 -41 -103 -16 -6 -74 76 -95 135                                -23 63 -24 221 -2 285 17 52 63 97 98 97 12 0 33 -12 47 -26z"></path>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
        <script src="/js/all.js"></script>
    </div>
)

export default Footer;

