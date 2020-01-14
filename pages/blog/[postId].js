import React, { PureComponent } from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PropTypes from "prop-types";
import CodeBlock from '../../components/code-block';

const BlogPost = ({ post }) => (
  <div>
    <Header></Header>
    <Head>
      <title>{post.title} - Muhammet Celepci</title>
    </Head>
    <div className="page_nav d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-center">
        <Link href="/">
          <a>Homepage</a>
        </Link>
        <svg className="chevron">
          <use xlinkHref="#chevron"></use>
        </svg>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <svg className="chevron">
          <use xlinkHref="#chevron"></use>
        </svg>
        <div className="main_title">{post.title}</div>
      </div>
    </div>
    <section className="subpage blog_detail">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="content">
              <a className="main_image fancy_img" href={`${post.image.src}`}><img src={`${post.image.src}`} alt={`${post.image.src}`} /></a>
              <div className="content-text">
                <div className="guzel_alan_kare_uzun guzel_alan_fixed">Dikey Sabit Reklam</div>
                <div className="kaynak_tarih">Muhammet Celepci<i className="far fa-dot-circle"></i>{post.date}, {post.time}</div>
                <h1>{post.title}</h1>

                <ReactMarkdown
                  source={post.details}
                  skipHtml={false}
                  escapeHtml={false}
                  renderers={{
                    code: CodeBlock,
                  }}
                />
                <div className="subtitle mini"><i className="fas fa-tag"></i>Tags</div>
                <div className="tags">
                  {Object.values(post.tags).map((val, key) => (
                    <div className="tags-item" key={key}>{val}</div>
                  ))}
                </div>
                <div className="subtitle mini"><i className="fas fa-share"></i>Share</div>
                <div className="share">
                  <a className="share-item" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.URL}/blog/${post.slug}`}><i className="fab fa-facebook"></i>Share</a>
                  <a className="share-item" target="_blank" href={`https://twitter.com/share?url=${process.env.URL}/blog/${post.slug}&text=${post.title}`}><i className="fab fa-twitter"></i>Tweet</a>
                  <a className="share-item" target="_blank" href={`https://api.whatsapp.com/send?text=${post.title} ${process.env.URL}/blog/${post.slug}`}><i className="fab fa-whatsapp"></i>Send</a>
                  <a className="share-item" target="_blank" href={`https://telegram.me/share/url?url=${process.env.URL}/blog/${post.slug}&text=${post.title}`}><i className="fab fa-telegram-plane"></i>Send</a>
                </div>
              </div>
            </div>
            <div className="guzel_alan_yatay big">Yatay Reklam</div>
          </div>
          <div className="col-xl-12">
            <h4 className="main_title md">Other Posts</h4>
            <div className="blog-slider owl-carousel owl-theme owl-theme_custom">
              <div className="blog-slider-item">
                <a className="news-item" href="#!">
                  <div className="image">
                    <img src="/img/img7.jpg" />
                  </div>
                  <div className="news-item-detail">
                    <div className="news-item-detail-icon">
                      <div className="svg">
                        <svg>
                          <use xlinkHref="#book"></use>
                        </svg><span>5 dk</span>
                      </div>
                    </div>
                    <div className="news-item-detail-content">
                      <div className="title">The Best of 10 Frontend Tools</div>
                      <div className="summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dicta error maxime sit vel. Asperiores consectetur dolor dolores eum fugit id nesciunt odio quasi reiciendis voluptate. Culpa earum error quod!</div>
                    </div>
                  </div>
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

BlogPost.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`${process.env.URL}/api/post/${query.postId}`);
  const json = await res.json();
  return {
    post: json.post
  };
};

export default BlogPost;
