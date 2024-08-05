import PostPageHome from './views/PostPageHome';
import SignUpPage from './views/SignUpPage';
import LoginPage from './views/LoginPage';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {path:"/", element:<PostPageHome/>},
    {path:"/login",element:<LoginPage/>},
    {path:"/signup",element:<SignUpPage/>}
  ]);
  return (
  <RouterProvider router={router}/>
  );
}

export default App;
