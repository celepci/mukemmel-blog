import React from "react";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

const Contact = () => (
    <div>
        <Header />
        <div className="page_nav d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-center">
                <Link href="/">
                    <a>Homepage</a>
                </Link>
                <svg className="chevron">
                    <use xlinkHref="#chevron"></use>
                </svg>
                <div className="main_title">Contact</div>
            </div>
        </div>
        <section className="subpage contact_page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <h1 className="main_title">Contact</h1>
                        <p className="description"><b>Hi dude!</b> I'm just one click away if you want to work with me or ask something. Below are 2 quick ways to contact me. </p>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="contact_item">
                            <div className="bg">
                                <div className="icon">
                                    <svg id="mail" viewBox="0 0 512 512">
                                        <title>mail</title>
                                        <path className="custom_path" d="M0,192l246.528,156.896c2.816,2.08,6.144,3.104,9.472,3.104s6.656-1.024,9.472-3.104L512,192 L265.6,3.2c-5.696-4.256-13.504-4.256-19.2,0L0,192z"></path>
                                        <path className="up f-fff" d="M416,0H96C78.368,0,64,14.368,64,32v352c0,8.832,7.168,16,16,16h352c8.832,0,16-7.168,16-16V32 C448,14.368,433.664,0,416,0z"></path>
                                        <g>
                                            <path className="f-custom" d="M144,96h224c8.832,0,16-7.168,16-16s-7.168-16-16-16H144c-8.832,0-16,7.168-16,16S135.168,96,144,96 z"></path>
                                            <path className="f-custom" d="M368,128H144c-8.832,0-16,7.168-16,16s7.168,16,16,16h224c8.832,0,16-7.168,16-16 S376.832,128,368,128z"></path>
                                            <path className="f-custom" d="M272,192H144c-8.832,0-16,7.168-16,16s7.168,16,16,16h128c8.832,0,16-7.168,16-16 S280.832,192,272,192z"></path>
                                        </g>
                                        <path className="custom_path" d="M265.472,348.896c-2.816,2.08-6.144,3.104-9.472,3.104s-6.656-1.024-9.472-3.104L0,192v288 c0,17.664,14.336,32,32,32h448c17.664,0,32-14.336,32-32V192L265.472,348.896z"></path>
                                        <path className="custom_path" d="M480,512H32c-17.952,0-32-14.048-32-32c0-5.088,2.432-9.888,6.528-12.896l240-160 c2.816-2.08,6.144-3.104,9.472-3.104s6.656,1.024,9.472,3.104l240,160C509.568,470.112,512,474.912,512,480 C512,497.952,497.952,512,480,512z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="contact_item-content">
                                <div className="title">Contact me by email</div>
                                <div className="description">You can contact me using Email. Click to below button or <pre className="d-inline">muhammetcelepci1@gmail.com</pre> copy this mail address.</div>
                                <a href="mailto:muhammetcelepci1@gmail.com" className="btn btn-primary btn-sm btn-icon-right" target="_blank" rel="norefferer noopener">Send Mail<i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                        <div className="contact_item">
                            <div className="bg">
                                <div className="icon">
                                    <svg id="telegram" viewBox="0 0 24 24">
                                        <path className="custom_path" d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"></path>
                                        <path className="custom_path other" d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="contact_item-content">
                                <div className="title">Contact me by Telegram</div>
                                <div className="description">I use to Telegram App actively. You can contact me using the Telegram App.</div>
                                <a href="https://web.telegram.org/#/im?p=@celepci" className="btn btn-primary btn-sm btn-icon-right" target="_blank" rel="norefferer noopener">Contact on Telegram<i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        <style jsx>{`
      .f-fff{
          fill:#FFF;
      }
      .f-custom{
          fill:#90A4AE;
      }
    `}</style>
    </div>
);

export default Contact;
