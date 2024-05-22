import { Link } from 'react-router-dom'
import './blogItem.css'
import axiosClient from '../../axios-client'


function deleteBlog(id) {
    axiosClient.delete(`/blog/delete/${id}`,{
        method: 'DELETE',
    });
}


function BlogItem({blog}) {
    return (
            <div className='blog'>
                <div className='blog-actions'>
                    <Link to={`/admin/edit/blog/${blog.id}`} className='btn edit-btn'>Edit</Link>
                    <button onClick={() => deleteBlog(blog.id)} className='btn'>Delete</button>
                </div>
                <h3 className="blog-name">{blog.name}</h3>
                <div className="blog-desc">
                    <p>{blog.description}</p>
                </div>
            </div>
    )
}

export default BlogItem
