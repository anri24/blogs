import {createContext, useContext, useEffect, useState} from "react";
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
});

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('TOKEN'))

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getBlogs() 
    }, [loading])

    const getBlogs = () => {
        setLoading(true)
        axiosClient.get('/blogs')
        .then(({data}) => {
            setBlogs(data)
            setLoading(false)
        })
    }

    

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('TOKEN', token);
        } else {
            localStorage.removeItem('TOKEN');
        }
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

        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
