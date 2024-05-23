import { useEffect} from "react"
import BlogItem from "../components/BlogItem"
import './dashboard.css'
import { useStateContext } from "../../contexts/ContextProvider"
import { Link } from "react-router-dom"


function AdminDashboard() {
    const {blogs,getBlogs,loading} = useStateContext();

    useEffect(() => {
        getBlogs() 
    }, [])



    
    
    return (
        <div>
           <h2 className="data-title">Blogs</h2>
            <Link to='/admin/create/blog' className="create-blog-link">Create blog</Link>
        <div className="blogs">
            
            {!loading && blogs.map(blog => <BlogItem blog={blog} key={blog.id} />)}
        </div>
        </div>
    )
}

export default AdminDashboard
