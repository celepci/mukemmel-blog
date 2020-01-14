import React from 'react'
import Link from "next/link";


const BlogItem = ({ title, slug, image_src, image_alt, readingtime, summary, date }) => {
    return (
        <Link href="/blog/[slug]]" as={`/blog/${slug}`}>
            <a className="news-item">
                <div className="image">
                    <img src={`${image_src}`} alt={`${image_alt}`} />
                </div>
                <div className="news-item-detail">
                    <div className="news-item-detail-icon">
                        <div className="svg">
                            <svg>
                                <use xlinkHref="#book"></use>
                            </svg>
                            <span>{readingtime}</span>
                        </div>
                    </div>
                    <div className="news-item-detail-content">
                        <div className="title">{title}</div>
                        <div className="summary">
                            {summary}
                        </div>
                        <small className="d-block text-right text-muted">{date}</small>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default BlogItem;