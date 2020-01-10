import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Home = ({ posts }) => (
  <div>
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <title> Blog </title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Cinzel:400,700|Pacifico&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
      <link href="/css/config.css" rel="stylesheet" />
      <link href="/css/style.css" rel="stylesheet" />
    </Head>
    <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
      <symbol id="search" viewBox="0 0 56.966 56.966">
        <title>search</title>
        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z"></path>
      </symbol>
      <symbol id="delete" viewBox="0 0 31.112 31.112">
        <title>delete</title>
        <polygon points="31.112,1.414 29.698,0 15.556,14.142 1.414,0 0,1.414 14.142,15.556 0,29.698 1.414,31.112 15.556,16.97 29.698,31.112 31.112,29.698 16.97,15.556 "></polygon>
      </symbol>
      <symbol id="menu" viewBox="0 0 384.97 384.97">
        <title>menu</title>
        <path d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03 c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"></path>
        <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03 S379.58,180.455,372.939,180.455z"></path>
        <path d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606 c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"></path>
      </symbol>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
      <symbol id="chevron" viewBox="0 -32 426.66667 426">
        <title>chevron</title>
        <path fill="#8389B4" d="m213.332031 181.667969c0 4.265625-1.277343 8.53125-3.625 11.730469l-106.667969 160c-3.839843 5.761718-10.238281 9.601562-17.707031 9.601562h-64c-11.730469 0-21.332031-9.601562-21.332031-21.332031 0-4.269531 1.28125-8.535157 3.625-11.734375l98.773438-148.265625-98.773438-148.269531c-2.34375-3.199219-3.625-7.464844-3.625-11.730469 0-11.734375 9.601562-21.335938 21.332031-21.335938h64c7.46875 0 13.867188 3.839844 17.707031 9.601563l106.667969 160c2.347657 3.199218 3.625 7.464844 3.625 11.734375zm0 0"></path>
        <path fill="#626a94" d="m426.667969 181.667969c0 4.265625-1.28125 8.53125-3.628907 11.730469l-106.664062 160c-3.839844 5.761718-10.242188 9.601562-17.707031 9.601562h-64c-11.734375 0-21.335938-9.601562-21.335938-21.332031 0-4.269531 1.28125-8.535157 3.628907-11.734375l98.773437-148.265625-98.773437-148.269531c-2.347657-3.199219-3.628907-7.464844-3.628907-11.730469 0-11.734375 9.601563-21.335938 21.335938-21.335938h64c7.464843 0 13.867187 3.839844 17.707031 9.601563l106.664062 160c2.347657 3.199218 3.628907 7.464844 3.628907 11.734375zm0 0"></path>
      </symbol>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
      <symbol id="book" viewBox="0 0 412.72 412.72">
        <title>book</title>
        <path d="M404.72,82.944c-0.027,0-0.054,0-0.08,0h0h-27.12v-9.28c0.146-3.673-2.23-6.974-5.76-8 c-18.828-4.934-38.216-7.408-57.68-7.36c-32,0-75.6,7.2-107.84,40c-32-33.12-75.92-40-107.84-40 c-19.464-0.048-38.852,2.426-57.68,7.36c-3.53,1.026-5.906,4.327-5.76,8v9.2H8c-4.418,0-8,3.582-8,8v255.52c0,4.418,3.582,8,8,8 c1.374-0.004,2.724-0.362,3.92-1.04c0.8-0.4,80.8-44.16,192.48-16h1.2h0.72c0.638,0.077,1.282,0.077,1.92,0 c112-28.4,192,15.28,192.48,16c2.475,1.429,5.525,1.429,8,0c2.46-1.42,3.983-4.039,4-6.88V90.944 C412.72,86.526,409.139,82.944,404.72,82.944z M16,333.664V98.944h19.12v200.64c-0.05,4.418,3.491,8.04,7.909,8.09 c0.432,0.005,0.864-0.025,1.291-0.09c16.55-2.527,33.259-3.864,50-4c23.19-0.402,46.283,3.086,68.32,10.32 C112.875,307.886,62.397,314.688,16,333.664z M94.32,287.664c-14.551,0.033-29.085,0.968-43.52,2.8V79.984 c15.576-3.47,31.482-5.241,47.44-5.28c29.92,0,71.2,6.88,99.84,39.2l0.24,199.28C181.68,302.304,149.2,287.664,94.32,287.664z M214.32,113.904c28.64-32,69.92-39.2,99.84-39.2c15.957,0.047,31.863,1.817,47.44,5.28v210.48 c-14.354-1.849-28.808-2.811-43.28-2.88c-54.56,0-87.12,14.64-104,25.52V113.904z M396.64,333.664 c-46.496-19.028-97.09-25.831-146.96-19.76c22.141-7.26,45.344-10.749,68.64-10.32c16.846,0.094,33.663,1.404,50.32,3.92 c4.368,0.663,8.447-2.341,9.11-6.709c0.065-0.427,0.095-0.859,0.09-1.291V98.944h19.12L396.64,333.664z"></path>
      </symbol>
    </svg>
    <header className="header">
      <div className="header-nav">
        <div className="container-fluid">
          <div className="header-nav-content">
            <div className="header-nav-content-left_side"><a className="logo" href="">
                <div className="icon"><img src="/img/pineapple2.svg" /></div>
                <div className="name">Muhammet.Celepci</div></a>
              <svg className="mobil_menu_open" onclick="$('.header-nav-content-menu,body').addClass('active')">
                <use xlinkHref="#menu"></use>
              </svg>
            </div>
            <div className="header-nav-content-right_side">
              <div className="search">
                <svg className="search_open" onclick="$('.search_area,body').addClass('active')">
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
                <svg className="search_area-close" onclick="$('.search_area,body').removeClass('active')">
                  <use xlinkHref="#delete"></use>
                </svg>
              </div>
              <div className="header-nav-content-menu">
                <div className="menu_linkler d-flex ml-10">
                  <ul className="nav">
                    <li className="nav-item"><a className="nav-link" href="#!">Homepage</a></li>
                    <li className="nav-item"><a className="nav-link" href="#!">Blog</a></li>
                    <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                      <div className="dropdown-menu"><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><a className="dropdown-item" href="#">Something else here</a></div>
                    </li>
                  </ul>
                </div>
              </div>
              <svg className="mobil_menu_close" onclick="$('.header-nav-content-menu,body').removeClass('active')">
                <use xlinkHref="#delete"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
<div className="container">
    {posts.map(post => (
      <div className="blog">
        <h2 className="blog-title">
          <Link href={post.slug}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown source={post.details} />
        </div>
        <div className="blog-date">{post.date}</div>
      </div>
    ))}
    </div>
    <footer>
      <div className="container">
        <div className="content">
          <div className="row align-items-center">
            <div className="col-md-4"><a className="logo" href="">
                <div className="icon"><img src="/img/pineapple2.svg" /></div>
                <div className="name">Muhammet.Celepci</div></a></div>
            <div className="col-md-8">
              <div className="social"><a className="item" href=""><i className="fab fa-facebook-f"></i></a><a className="item" href=""><i className="fab fa-twitter"></i></a><a className="item" href=""><i className="fab fa-linkedin"></i></a><a className="item" href=""><i className="fab fa-youtube"></i></a><a className="item" href=""><i className="fab fa-instagram"></i></a><a className="item" href=""><i className="fab fa-github"></i></a></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="linkler"><a href="#">Blog</a><a href="#">Contact</a></div>
            </div>
          </div>
        </div>
        <div className="copyright">Muhammet Celepci | 2020</div>
      </div>
    </footer>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
    <script src="./dist/js/all.js"></script>
    <style jsx>{`
      
      .blog-date {
        text-align: right;
        color: #cccccc;
        margin: 12px 0 48px 0;
      }

      a {
        color: #35459e;
        text-decoration: none;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
