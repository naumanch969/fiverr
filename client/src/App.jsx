
import { Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { AddGig, Gig, Gigs, Home, Login, Message, Messages, MyGigs, Orders, Register } from './pages'


const App = () => {

  const Layout = () => {
    return (
      <div className='  ' >
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }



  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/gigs',
          element: <Gigs />
        },
        {
          path: '/auth/login',
          element: <Login />
        },
        {
          path: '/auth/register',
          element: <Register />
        },
        {
          path: '/gig/:gigId',
          element: <Gig />
        },
        {
          path: '/orders',
          element: <Orders />
        },
        {
          path: '/mygigs',
          element: <MyGigs />
        },
        {
          path: '/add',
          element: <AddGig />
        },
        {
          path: '/messages',
          element: <Messages />
        },
        {
          path: '/message/:messageId',
          element: <Message />
        },
      ]
    }
  ])




  return (

    <RouterProvider router={router} />

  )
}

export default App