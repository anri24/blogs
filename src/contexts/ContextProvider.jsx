import {createContext,  useContext, useState} from "react";
import axiosClient from "../axios-client";

const StateContext = createContext({
    user: {},
    token: null,
    blogs: [],
    loading: false,
    setUser: () => {},
    setToken: () => {},
    setBlog: () => {},
    setLoading: () => {},
    deleteBlog: () => {},
    getBlogs: () => {},
    createBlog: () => {},
});

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('TOKEN'))

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)



    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('TOKEN', token);
        } else {
            localStorage.removeItem('TOKEN');
        }
    }
    
    const getBlogs = () => {
        setLoading(true)
        axiosClient.get('/blogs')
        .then(({data}) => {
            setBlogs(data)
            setLoading(false)
        })
    }

    const createBlog = (data) => {
        axiosClient.post('/blog/create',data)
        .then(() => {
            
        }).catch(err => {
            const response = err.response;
            console.error(response)
        })
    }

    function deleteBlog(id) {
        axiosClient.delete(`/blog/delete/${id}`,{
            method: 'DELETE',
        }).then(() => {
            getBlogs()
        });
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            blogs,
            loading,
            setUser,
            setToken,
            setBlogs,
            setLoading,
            deleteBlog,
            getBlogs,
            createBlog,

        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
