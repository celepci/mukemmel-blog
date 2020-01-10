import React from 'react'
import Link from 'next/link'
import Head from "next/head";
import IndexSvg from "./svg/index";





const Header = () => (
    <header className="header">
        <Head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <title>Muhammet Celepci Blog </title>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
            <link href="https://fonts.googleapis.com/css?family=Cinzel:400,700|Pacifico&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
            <link href="/css/config.css" rel="stylesheet" />
            <link href="/css/style.css" rel="stylesheet" />
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>

        </Head>
        <IndexSvg />
        <div className="header-nav">
            <div className="container-fluid">
                <div className="header-nav-content">
                    <div className="header-nav-content-left_side">
                        <Link href="/">
                            <a className="logo">
                                <div className="icon"><img src="/img/pineapple2.svg" /></div>
                                <div className="name">Muhammet.Celepci</div>
                            </a>
                        </Link>
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
                        <div className="search_area">
                            <div className="search_area-content">
                                <div className="search_area-content-title">Search in Blog</div>
                                <div className="input_cover">
                                    <input className="form-control" type="text" placeholder="Search" required="required" />
                                    <svg>
                                        <use xlinkHref="#search"></use>
                                    </svg>
                                </div>
                                <div className="results nice_scroll">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="results-item">
                                                <div className="results-item-title">Deneme Yazı</div>
                                                <div className="results-item-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus asperiores atque blanditiis.</div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="results-item">
                                                <div className="results-item-title">Deneme Yazı</div>
                                                <div className="results-item-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus asperiores atque blanditiis.</div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="results-item">
                                                <div className="results-item-title">Deneme Yazı</div>
                                                <div className="results-item-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus asperiores atque blanditiis.</div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="results-item">
                                                <div className="results-item-title">Deneme Yazı</div>
                                                <div className="results-item-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus asperiores atque blanditiis.</div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="results-item">
                                                <div className="results-item-title">Deneme Yazı</div>
                                                <div className="results-item-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus asperiores atque blanditiis.</div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="results-item">
                                                <div className="results-item-title">Deneme Yazı</div>
                                                <div className="results-item-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus asperiores atque blanditiis.</div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="results-item">
                                                <div className="results-item-title">Deneme Yazı</div>
                                                <div className="results-item-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus asperiores atque blanditiis.</div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="results-item">
                                                <div className="results-item-title">Deneme Yazı</div>
                                                <div className="results-item-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus asperiores atque blanditiis.</div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="results-item">
                                                <div className="results-item-title">Deneme Yazı</div>
                                                <div className="results-item-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus asperiores atque blanditiis.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <svg className="search_area-close">
                                <use xlinkHref="#delete"></use>
                            </svg>
                        </div>
                        <div className="header-nav-content-menu">
                            <div className="menu_linkler d-flex ml-10">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link">Homepage</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/about">
                                            <a className="nav-link">About</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/blog">
                                            <a className="nav-link">Blog</a>
                                        </Link>
                                    </li>    
                                    <li className="nav-item">
                                        <Link href="/contact">
                                            <a className="nav-link">Contact</a>
                                        </Link>
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

