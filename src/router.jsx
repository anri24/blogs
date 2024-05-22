import { Navigate, createBrowserRouter } from 'react-router-dom'
import GuestLayout from './components/layouts/GuestLayout';
import Dashboard from './views/Dashboard';
import Blogs from './views/Blogs';
import Login from './views/Login';
import Register from './views/Register';
import AdminLayout from './components/layouts/AdminLayout';

const router = createBrowserRouter([
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/dashboard' />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            
        ],

    }
]);

export default router;