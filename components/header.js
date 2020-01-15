import React from 'react'
import Link from 'next/link'
import Head from "next/head";
import IndexSvg from "./svg/index";
import Search from "./search"


const Header = () => (

    <header className="header">
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <title>Muhammet Celepci Blog </title>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
            <link href="/css/config.css" rel="stylesheet" />
            <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <link rel="stylesheet" href="/css/slider_styles.css"></link>
            <link href="/css/style.css" rel="stylesheet" />

            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
        </Head>
        <IndexSvg />
        <div className="header-nav">
            <div className="container-fluid">
                <div className="header-nav-content">
                    <div className="header-nav-content-left_side">
                        <a className="logo" href="/">
                            <div className="icon"><img src="/img/pineapple2.svg" /></div>
                            <div className="name">Muhammet.Celepci</div>
                        </a>
                        <svg className="mobil_menu_open">
                            <use xlinkHref="#menu"></use>
                        </svg>
                    </div>
                    <div className="header-nav-content-right_side">
                        <div className="search">
                            <svg className="search_open">
                                <use xlinkHref="#search"></use>
                            </svg>
                        </div>
                        <Search></Search>

                        <div className="header-nav-content-menu">
                            <div className="menu_linkler d-flex ml-10">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a href="/" className="nav-link">Homepage</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/blog">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <svg className="mobil_menu_close">
                            <use xlinkHref="#delete"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </header>
)

export default Header;

