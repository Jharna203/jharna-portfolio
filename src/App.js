import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Parent from './Pages/Projects/Parent';
import Project from './Pages/Projects/Project';
import Projects from './Pages/Projects/Projects';
import Main from './Router/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
          path: '',
          element:<Home></Home>
        },
        {
          path: '/project',
          element:<Projects></Projects>
        },
        {
          path: '/project/:id',
          element:<Project></Project>
        },
        {
          path: '/blog',
          element:<Blog></Blog>
        }
      ]
    }
  ]);
  return (
    <div className="max-w-[1540px] mx-auto">
      <RouterProvider router={router} ></RouterProvider>     
    </div>
  );
}

export default App;
