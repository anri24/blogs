import { useEffect, useState } from "react"
import axiosClient from "../../axios-client"
import BlogItem from "../components/BlogItem"
import './dashboard.css'
import { useStateContext } from "../../contexts/ContextProvider";


function Dashboard() {
    const {blogs,getBlogs,loading} = useStateContext();

    useEffect(() => {
        getBlogs() 
    }, [])

    
    
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
