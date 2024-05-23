import { Link } from 'react-router-dom'
import './blogItem.css'
import axiosClient from '../../axios-client'
import { useStateContext } from '../../contexts/ContextProvider'





function BlogItem({blog}) {
    const {deleteBlog} = useStateContext();

    return (
            <div className='blog'>
                <div className='blog-actions'>
                    <Link to={`/admin/edit/blog/${blog.id}`} className='btn edit-btn'>Edit</Link>
                    <button onClick={() => deleteBlog(blog.id)} className='btn'>Delete</button>
                </div>
                <img className='blog-image' src={`${import.meta.env.VITE_FILE_URL_API}/${blog.image}`} width='100%' height='150px'/>
                <h3 className="blog-name">{blog.name}</h3>
                <div className="blog-desc">
                    <p>{blog.description}</p>
                </div>
            </div>
    )
}

export default BlogItem
