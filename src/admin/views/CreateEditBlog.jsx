import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axiosClient from "../../axios-client";

function CreateEditBlog() {
    const {blogId} = useParams();
    const [blog, setBlog] = useState();
    
        useEffect(() => {
            if(blogId){  

                axiosClient.get(`/blog/${blogId}`)
                .then(({data}) => {
                    setBlog(data)
                })
            }
        }, [])



    

    return (
        <div>
            <input defaultValue={blog ? blog.name : ''} />
            <textarea defaultValue={blog ? blog.description : ''}></textarea>
        </div>
    )
}

export default CreateEditBlog
