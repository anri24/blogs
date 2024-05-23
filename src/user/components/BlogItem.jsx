import './blogItem.css'

function BlogItem({blog}) {
    return (
            <div className='blog'>
                <img className='blog-image' src={`${import.meta.env.VITE_FILE_URL_API}/${blog.image}`} width='100%' height='150px'/>
                <h3 className="blog-name">{blog.name}</h3>
                <div className="blog-desc">
                    <p>{blog.description}</p>
                </div>
            </div>
    )
}

export default BlogItem
