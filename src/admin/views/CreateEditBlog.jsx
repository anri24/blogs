import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axiosClient from "../../axios-client";
import { useStateContext } from "../../contexts/ContextProvider";

function CreateEditBlog() {
    const {blogId} = useParams();
    const [blog, setBlog] = useState();

    const nameRef = useRef();
    const descRef = useRef();

    const navigate = useNavigate();


    const {createBlog} = useStateContext();
    
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
            }

            if(blogId){
                axiosClient.put(`/blog/update/${blogId}`, payload)
                .then(() => {
                    navigate('/admin/blogs')
                }).catch(err => {
                    const response = err.response;
                    console.error(response)
                })
            } else{
                axiosClient.post('/blog/create', payload)
                .then(() => {
                    navigate('/admin/blogs')
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
            <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateEditBlog
