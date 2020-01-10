import React from 'react'
import Link from 'next/link'


const Header = () => (
    <header className="header">
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
                                        <Link href="">
                                            <a className="nav-link">Homepage</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="">
                                            <a className="nav-link">Blog</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="">
                                            <a className="nav-link">About</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="">
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

