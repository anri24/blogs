import { useEffect, useState } from "react"
import axiosClient from "../../axios-client"
import BlogItem from "../components/BlogItem"
import { Link } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider"


function AdminBlogs() {
    const {blogs, loading} = useStateContext();

    console.log(blogs)

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

export default AdminBlogs
