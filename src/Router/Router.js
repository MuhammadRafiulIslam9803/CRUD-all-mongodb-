import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Main from "../Layout/Main";
import Read from "../Components/Read";
import Update from "../Components/Update";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/read',
                element: <Read></Read>,
                loader: async () => fetch('http://localhost:5000/users')
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: async ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
            },
            
           ]}
    
    
])

export default router;