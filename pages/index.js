import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import BlogItem from "../components/blog_item";
import Router from 'next/router'


const Home = ({ posts }) => (
  <div id="root">
    <Header />
    <section className="main">
      <div className="container">
        
        <section className="about">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-m480-12">
              <div className="about-text">
                <h1 className="main_title">Who Am I?</h1>
                <p> Hey there, I'm Muhammet Celepci. I'm a Computer Engineer and work as a Front End Developer.</p>
                <Link href="/about">
                  <a className="btn btn-outline-primary btn-lg">What Else About Me</a>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-2 col-lg-7 offset-lg-0 col-md-6 offset-md-0 col-sm-4">
              <div className="about-images">
                <div className="about-images-item">
                  <div className="image_cover md"><img src="/img/img7.jpg" alt="Muhammet Celepci About" /></div>
                </div>
                <div className="about-images-item">
                  <div className="image_cover lg"><img src="/img/wp6.jpg" alt="Muhammet Celepci About" /></div>
                </div>
                <div className="about-images-item">
                  <div className="image_cover xs"><img src="/img/wp3.jpg" alt="Muhammet Celepci About" /></div>
                </div>
                <div className="about-images-item">
                  <div className="image_cover sm"><img src="/img/wp4.jpg" alt="Muhammet Celepci About" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7 offset-lg-0 col-md-6 offset-md-0 col-sm-4 order-1 order-sm-0">
              <div className="about-images">
                <div className="about-images-item">
                  <div className="image_cover sm"><img src="/img/vuejs.jpg" /></div>
                </div>
                <div className="about-images-item">
                  <div className="image_cover lg"><img src="/img/work.jpg" /></div>
                </div>
                <div className="about-images-item">
                  <div className="image_cover xs"><img src="/img/wordpress.jpg" /></div>
                </div>
                <div className="about-images-item">
                  <div className="image_cover sm">
                    <Link href="/contact">
                      <a className="lets_contact"><span>Let's</span>Contact</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 offset-xl-2 col-lg-5 col-md-6 col-sm-8 col-m480-12 order-sm-1">
              <div className="about-text">
                <h1 className="main_title">What I do?</h1>
                <p>I usually work on front end development. I work using technologies like VueJS, PUG, SCSS, Wordpress. </p>
              </div>
            </div>
          </div>
        </section>
        <section className="works">
          <h2 className="main_title lg text-center">Works</h2>
          <div className="description text-center">The projects I've done before.</div>
          <div className="works-slider owl-theme owl-carousel owl-theme_custom">
            <div className="works-item">
              <div className="image"><img src="/img/works/burak_nakliye.jpg" /></div>
              <div className="works-item-detail"><a className="works-item-detail-title" href="https://buraknakliye.com" target="_blank" rel="norefferer noopener">Buraknakliye.com</a>
                <div className="works-item-detail-summary">UI Design, Frontend Development, Wordpress Theme Development</div><span>2019</span>
              </div>
            </div>
            <div className="works-item">
              <div className="image"><img src="/img/works/fabrikada.jpg" /></div>
              <div className="works-item-detail"><a className="works-item-detail-title" href="https://fabrikada.com" target="_blank" rel="norefferer noopener">Fabrikada.com</a>
                <div className="works-item-detail-summary">UI&UX, Frontend Development</div><span>2019</span>
              </div>
            </div>
            <div className="works-item">
              <div className="image"><img src="/img/works/kdzeregli.jpg" /></div>
              <div className="works-item-detail"><a className="works-item-detail-title" href="https://kdzeregli.org" target="_blank" rel="norefferer noopener">Kdzeregli.org</a>
                <div className="works-item-detail-summary">UI&UX, Frontend Development, Wordpress Theme Development</div><span>2019</span>
              </div>
            </div>
            <div className="works-item">
              <div className="image"><img src="/img/works/fotottarena.jpg" /></div>
              <div className="works-item-detail"><a className="works-item-detail-title" href="https://fotottarena.com" target="_blank" rel="norefferer noopener">Fotottarena.com</a>
                <div className="works-item-detail-summary">UI&UX, Frontend Development, Wordpress Theme Development</div><span>2019</span>
              </div>
            </div>
            <div className="works-item">
              <div className="image"><img src="/img/works/wunderdesigns.jpg" /></div>
              <div className="works-item-detail"><a className="works-item-detail-title" href="https://wunderdesigns.at" target="_blank" rel="norefferer noopener">Wunderdesigns.at</a>
                <div className="works-item-detail-summary">UI Design, Frontend Development</div><span>2019</span>
              </div>
            </div>
            <div className="works-item">
              <div className="image"><img src="/img/works/hairtime.jpg" /></div>
              <div className="works-item-detail"><a className="works-item-detail-title" href="https://hairtime.be" target="_blank" rel="norefferer noopener">Hairtime.be</a>
                <div className="works-item-detail-summary">UI Design, Frontend Development, Wordpress Theme Development</div><span>2019</span>
              </div>
            </div>
            <div className="works-item">
              <div className="image"><img src="/img/works/matbaa.jpg" /></div>
              <div className="works-item-detail">
                <div className="works-item-detail-title">Printing House</div>
                <div className="works-item-detail-summary">UI&UX, Frontend Development</div><span>2018</span>
              </div>
            </div>
            <div className="works-item">
              <div className="image"><img src="/img/works/e-commerce.jpg" /></div>
              <div className="works-item-detail">
                <div className="works-item-detail-title">E-Commerce</div>
                <div className="works-item-detail-summary">UI Design, Frontend Development</div><span>2018</span>
              </div>
            </div>
          </div>
        </section>
        <section className="techs">
          <h2 className="main_title lg text-center">Techs</h2>
          <div className="description text-center">Lorem ipsum dolor sit amet, explicabo facilis fugiat harum laboriosam magni nam.</div>
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5 col-md-6 order-1 order-m425-0">
              <div className="techs-text">
                <h3 className="main_title sm">Which technologies am I use/learn/teach?</h3>
                <p>While develop a project I use various development technologies. At the same time I learn some technologies.</p>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-2 col-lg-7 col-md-6 order-m425-1">
              <div className="techs-content">
                <div className="techs-content-item">
                  <div className="image_cover" data-toggle="tooltip" data-html="true" data-placement="bottom" title="VueJs"><img src="/img/techs/vue.svg" /></div>
                </div>
                <div className="techs-content-item justify-content-start align-items-end">
                  <div className="image_cover" data-toggle="tooltip" data-html="true" data-placement="bottom" title="HTML 5"><img src="/img/techs/html5.svg" /></div>
                </div>
                <div className="techs-content-item justify-content-end align-items-start">
                  <div className="image_cover" data-toggle="tooltip" data-html="true" data-placement="bottom" title="CSS 3"><img src="/img/techs/css3.svg" /></div>
                </div>
                <div className="techs-content-item">
                  <div className="image_cover" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Javascript"><img src="/img/techs/js.svg" /></div>
                </div>
                <div className="techs-content-item">
                  <div className="image_cover" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Gulp"><img src="/img/techs/gulp.svg" /></div>
                </div>
                <div className="techs-content-item justify-content-end align-items-end">
                  <div className="image_cover" data-toggle="tooltip" data-html="true" data-placement="bottom" title="NPM"><img src="/img/techs/npm.svg" /></div>
                </div>
                <div className="techs-content-item">
                  <div className="image_cover" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Git, Github, Gitlab"><img src="/img/techs/git.svg" /></div>
                </div>
                <div className="techs-content-item justify-content-start align-items-start">
                  <div className="image_cover" data-toggle="tooltip" data-html="true" data-placement="bottom" title="SASS / SCSS"><img src="/img/techs/sass.svg" /></div>
                </div>
                <div className="techs-content-item">
                  <div className="image_cover" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Wordpress"><img src="/img/techs/wordpress.svg" /></div>
                </div>
                <div className="techs-content-item justify-content-end align-items-start">
                  <div className="image_cover" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Bootstrap 4+"><img src="/img/techs/bootstrap4.svg" /></div>
                </div>
                <div className="techs-content-item">
                  <div className="image_cover" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Pug/Jade"><img src="/img/techs/pug.svg" /></div>
                </div>
                <div className="techs-content-item">
                  <div className="image_cover" data-toggle="tooltip" data-html="true" data-placement="bottom" title="NodeJS"><img src="/img/techs/nodejs.svg" /></div>
                </div>
                <div className="techs-content-item justify-content-end align-items-start">
                  <div className="image_cover" data-toggle="tooltip" data-html="true" data-placement="bottom" title="PHP"><img src="/img/techs/php.svg" /></div>
                </div>
                <div className="techs-content-item align-items-end">
                  <div className="image_cover" data-toggle="tooltip" data-html="true" data-placement="bottom" title="MySQL, Database Management"><img src="/img/techs/mysql.svg" /></div>
                </div>
                <div className="techs-content-item align-items-start">
                  <div className="image_cover" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Webpack"><img src="/img/techs/webpack.svg" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog">
          <h3 className="main_title lg text-center">Blog</h3>
          <div className="description text-center"></div>
          <div className="blog-slider owl-carousel owl-theme owl-theme_custom">
            {posts.slice(0, 10).map((post, key) => (
              <div className="blog-slider-item" key={key}>
                <BlogItem
                  title={post.title}
                  slug={post.slug}
                  image_src={post.image.src}
                  image_alt={post.image.alt}
                  readingtime={post.readingtime}
                  summary={post.summary}
                  date={post.date}
                />
              </div>
            ))}
          </div>
          <a className="btn btn-primary btn-sm all_items btn-icon-right" href="/blog">All Blog Posts<i className="fas fa-arrow-right"></i></a>
        </section>
      </div>
    </section>

    <Footer />
  </div>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`${process.env.URL}/api/posts`);
  const json = await res.json();
  
  return { posts: json.posts };
};

const handleRouteChange = url => {
  console.log('App is changing to: ', url);
}

Router.events.on('routeChangeStart', handleRouteChange)
export default Home;
