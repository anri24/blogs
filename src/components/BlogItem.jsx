
function BlogItem({blog}) {
    return (
            <div className='blog'>
                <h3 className="blog-name">name: {blog.name}</h3>
                <div className="blog-desc">
                    Description:
                    <p>{blog.description}</p>
                </div>
            </div>
    )
}

export default BlogItem
