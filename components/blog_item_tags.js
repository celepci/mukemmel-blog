import React from 'react'


const BlogItemTags = ({ tag_title }) => {
    return (
        Object.values(tag_title).map((val) => (
            <div className="tags-item">{val}</div>
        ))
    );
}

export default BlogItemTags;