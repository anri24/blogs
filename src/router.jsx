import { Navigate, createBrowserRouter } from 'react-router-dom'
import GuestLayout from './user/layout/GuestLayout';
import Dashboard from './user/views/Dashboard';
import AdminDashboard from './admin/views/AdminDashboard';
import Login from './views/Login';
import Register from './views/Register';
import AdminLayout from './admin/layout/AdminLayout';
import CreateEditBlog from './admin/views/CreateEditBlog';

const router = createBrowserRouter([
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: '/admin',
                element: <Navigate to='/admin/dashboard' />
            },
            {
                path: '/admin/dashboard',
                element: <AdminDashboard />
            },
            {
                path: '/admin/create/blog',
                element: <CreateEditBlog />
            },
            {
                path: '/admin/edit/blog/:blogId',
                element: <CreateEditBlog />
            },

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