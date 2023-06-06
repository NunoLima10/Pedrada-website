import ReactDOM from 'react-dom/client';
import App from './App';
import Registration from './routes/Registration/Registration';
import Login from './routes/Login/Login';
import Landing from './routes/Landing/Landing';
import Feed from './routes/Feed/Feed';
import Protected from './routes/Protected/Protected';

import './index.css';

import { createBrowserRouter,RouterProvider} from 'react-router-dom';
const router = createBrowserRouter([
    {
        element: <App/>,
        children:[
            {
                path: "/",
                element:<Landing/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/registration',
                element: <Registration/>,
            },
            {
                path:'/feed',
                element: <Protected userRoles={["login"]}><Feed/></Protected>,
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

