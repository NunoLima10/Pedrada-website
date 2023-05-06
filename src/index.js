import ReactDOM from 'react-dom/client';
import App from './App';
import Registration from './routes/Registration/Registration';
import Login from './routes/Login/Login';
import Home from './routes/Home/Home';

import './index.css';

import { createBrowserRouter,RouterProvider} from 'react-router-dom';
const router = createBrowserRouter([
    {
        element: <App/>,
        children:[
            {
                path: "/",
                element:<Home/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/registration',
                element: <Registration/>,
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

