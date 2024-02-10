import './App.css';
import Content from './Componets/Content';
import Header from './Componets/Header'
import Footer from './Componets/Footer';
import { Container } from 'react-bootstrap';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Content />,
    },
    {
      path: "/admin",
      element: <div>You are successfully logged in. Welcome to admin page.</div>,
    },
  ]);
  
  return <RouterProvider router={router} />
}
export default App;
