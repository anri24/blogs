import './blogItem.css'

function BlogItem({blog}) {
    return (
            <div className='blog'>
                <h3 className="blog-name">{blog.name}</h3>
                <div className="blog-desc">
                    <p>{blog.description}</p>
                </div>
            </div>
    )
}

export default BlogItem
