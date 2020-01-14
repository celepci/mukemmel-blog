import React from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Footer from "../components/footer";
import Header from "../components/header";
import BlogItem from "../components/blog_item";


const Blog = ({ posts }) => (
    <div>
        <Header />
        <Head>
            <title>All Posts - Muhammet Celepci</title>
        </Head>
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
