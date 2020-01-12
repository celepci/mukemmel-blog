import React from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Footer from "../components/footer";
import Header from "../components/header";


const Blog = ({ posts }) => (
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
                <div className="main_title">Blog</div>
            </div>
        </div>
        <section className="subpage blog">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="main_title">ALL POSTS</h1>
                    </div>

                    {posts.map((post, key) => (
                        <div className="col-xl-4 col-lg-4 col-sm-6" key={key}>
                            <Link href="/blog/[post.slug]" as={`/blog/${post.slug}`}>
                                <a className="news-item">
                                    <div className="image">
                                        <img src="/img/img7.jpg" />
                                    </div>
                                    <div className="news-item-detail">
                                        <div className="news-item-detail-icon">
                                            <div className="svg">
                                                <svg>
                                                    <use xlinkHref="#book"></use>
                                                </svg>
                                                <span>{post.readingtime}</span>
                                            </div>
                                        </div>
                                        <div className="news-item-detail-content">
                                            <div className="title">{post.title}</div>
                                            <div className="summary">
                                                {post.summary}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}



                    <div className="col-12">
                        <nav>
                            <ul className="pagination justify-content-center">
                                <li className="page-item"><a className="page-link" href="#" aria-label="Previous"><i className="fas fa-angle-double-left"></i></a></li>
                                <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-left"></i></a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item active"><a className="page-link" href="#">3</a></li>
                                <li className="page-item disabled"><a className="page-link" href="#" aria-label="Next"><i className="fas fa-angle-double-right"></i></a></li>
                                <li className="page-item disabled"><a className="page-link" href="#"><i className="fas fa-angle-right"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <Footer />

    </div>
);
Blog.getInitialProps = async ({ req }) => {
    const res = await fetch(`${process.env.URL}/api/posts`);
    const json = await res.json();
    return { posts: json.posts };
}
export default Blog;
