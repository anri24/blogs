import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axiosClient from "../../axios-client";
import { useStateContext } from "../../contexts/ContextProvider";
import axios from "axios";

function CreateEditBlog() {
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
        <div>
            <form onSubmit={createEditData}>
            <input ref={nameRef} defaultValue={blog ? blog.name : ''} />
            <textarea ref={descRef} defaultValue={blog ? blog.description : ''}></textarea>
            <input  type="file" defaultValue={blog ? blog.image : ''} onChange={(e) => setImage(e.target.files[0])
            } />
            <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateEditBlog
