import { useEffect, useState } from "react"
import axiosClient from "../axios-client"
import BlogItem from "../components/BlogItem"
import './dashboard.css'


function Dashboard() {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getBlogs() 
    }, [])

    const getBlogs = () => {
        setLoading(true)
        axiosClient.get('/blogs/limited')
        .then(({data}) => {
            setBlogs(data)
            setLoading(false)
        })
    }

    
    
    return (
        <div>
            <h2 className="data-title">Blogs</h2>
        <div className="blogs">
            
            {!loading && blogs.map(blog => <BlogItem blog={blog} key={blog.id} />)}
        </div>
        </div>
    )
}

export default Dashboard
