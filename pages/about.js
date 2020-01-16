import React from "react";
import Link from "next/link";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

const About = () => (
  <div>

    <Header></Header>
    <Head>
      <title>About Me - Muhammet Celepci</title>
    </Head>
    <div className="page_nav d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-center">
        <Link href="">
          <a>Homepage</a>
        </Link>
        <svg className="chevron">
          <use xlinkHref="#chevron"></use>
        </svg>
        <div className="main_title">About Me</div>
      </div>
    </div>
    <section className="subpage blog_detail blank_page">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="content">
              <div className="content-text">
                <h1>About Me</h1>
                <p>
                  <b> Hi there!</b>
                  <br />
                  In fact, the reason for create this page is just internet traditions. There's not much things to write. But I mention shortly.
                </p>
                <h4>What am I doing recently?</h4>
                <p>
                  I work as a freelance web developer for now. I live in Kdz. Ereğli. And I will go to the Army soon. 
                </p>
                
                <figure>
                  <a className="fancy_img" href="/img/kdzeregli.jpg" >
                    <img src="/img/kdzeregli.jpg" />
                  </a>
                  <figcaption>A view from where I live Kdz. Ereğli</figcaption>
                </figure>
                <h4>How can you contact to me?</h4>
                <a href="/contact">
                    Click This. 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
