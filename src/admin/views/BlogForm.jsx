import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axiosClient from "../../axios-client";
import { useStateContext } from "../../contexts/ContextProvider";
import './blogForm.css'

function BlogForm() {
    const {blogId} = useParams();
    const [blog, setBlog] = useState();

    const nameRef = useRef();
    const descRef = useRef();
    const [image, setImage] = useState([]);

    const navigate = useNavigate();


    const {createBlog,token} = useStateContext();
    
        useEffect(() => {
            if(blogId){  

                axiosClient.get(`/blog/${blogId}`)
                .then(({data}) => {
                    setBlog(data)
                })
            }
        }, [])


        function createEditData(e){
            e.preventDefault();

            const payload = {
                name: nameRef.current.value,
                description: descRef.current.value,
                image: image,
            }

            if(blogId){
                axiosClient.post(`/blog/update/${blogId}`, payload, {
                    headers: {
                        "content-type": "multipart/form-data",
                    }
                })
                .then(() => {
                    navigate('/admin/dashboard')
                }).catch(err => {
                    const response = err.response;
                    console.error(response)
                })
            } else{
                axiosClient.post('/blog/create', payload, {
                    headers: {
                        "content-type": "multipart/form-data",
                    }
                })
                .then(() => {
                    navigate('/admin/dashboard')
                }).catch(err => {
                    const response = err.response;
                    console.error(response)
                })
            }

            
        }
        
    return (
        <div className="form-div">
            <form className="blog-form" onSubmit={createEditData}>
                <div>
                    <label htmlFor="blog-name">Name</label>
                    <input id="blog-name" className="input form-input" ref={nameRef} defaultValue={blog ? blog.name : ''} />
                </div>
                <div>
                    <label htmlFor="blog-desc">Description</label>
                    <textarea id="blog-desc" className="input form-input form-desc" ref={descRef} defaultValue={blog ? blog.description : ''}></textarea>
                </div>
                <div>
                    <label htmlFor="blog-image" className="form-file-label">Image</label>
                    <input id="blog-image" className="input form-file"  type="file" defaultValue={blog ? blog.image : ''} onChange={(e) => setImage(e.target.files[0])} />
                </div>

            
            <button className="btn form-btn">Submit</button>
            </form>
        </div>
    )
}

export default BlogForm
