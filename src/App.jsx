import { useState } from 'react'
import { Navbar} from './compoments/Navbar'
import { Wallpaper } from './compoments/wallpaper'
import { Filter } from './compoments/Filter'
import { Article } from './compoments/article'
import { Pagination } from './compoments/Pagination'
import { Footer } from './compoments/Footer'
import { ShowArticle } from './compoments/ShowArticle'
import { MoreDetails } from './compoments/MoreDetails'
import { SpaceCheckout } from './compoments/SpaceCheckout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './compoments/Login'
import { Singin } from './compoments/singin'
import { Headcategory } from './compoments/Headcategory'
import { Cart } from './compoments/Cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className="container">
      <Navbar></Navbar>
      <Wallpaper></Wallpaper>
      <Filter></Filter>
      <h3 style={{margin:'30px 0px'}}>Headphones For You!</h3>
      <Article></Article>
      <Article></Article>
      <Article></Article>
      <Pagination></Pagination>
      <h3 style={{margin:'30px 0px'}}>Weekly Popular Products</h3>
      <Article></Article>
      <Footer></Footer>
    </div>
  },
  {
    path: '/showarticle',
    element: <div className="container">
      <Navbar></Navbar>
      <hr />
      <ShowArticle></ShowArticle>
      <h3 style={{margin:'30px 0px'}}>Apple AirPods Max Wireless HeadPhones Full Spacifications</h3>
      <MoreDetails></MoreDetails>
      <h3 style={{margin:'30px 0px'}}>Similar Items You Might Like</h3>
      <Article></Article>
      <Article></Article>
      <Pagination></Pagination>
    </div>
  },
  {
    path: '/checkout',
    element: <div className="container" id='container'>
      <Navbar></Navbar>
      <hr />
      <SpaceCheckout></SpaceCheckout>
    </div>
  },
  {
    path: '/login',
    element: <div className="container" id='container'>
      <Navbar></Navbar>
      <hr />
      <div className="for-login">
        <Login></Login>
      </div>
    </div>
  },
  {
    path: '/singin',
    element: <div className="container" id='container'>
      <Navbar></Navbar>
      <hr />
      <div className="for-singin">
        <Singin></Singin>
      </div>
    </div>
  },
  {
    path: '/category',
    element: <div className="container">
      <Navbar></Navbar>
      <Headcategory></Headcategory>
      <h3 style={{margin:'30px 0px'}}>Phones For You!</h3>
      <Article></Article>
      <Article></Article>
      <h3 style={{margin:'30px 0px'}}>Computer</h3>
      <Article></Article>
      <Article></Article>
      <h3 style={{margin:'30px 0px'}}>e-book</h3>
      <Article></Article>
      <Article></Article>
      <h3 style={{margin:'30px 0px'}}>Template</h3>
      <Article></Article>
      <Article></Article>
      <Footer></Footer>
      <Pagination></Pagination>

    </div>
  },
  {
    path: '/cart',
    element: <div className="container" id='container'>
      <Navbar></Navbar>
      <hr />
      <div className="for-cart">
        <Cart></Cart>
      </div>
    </div>
  },
 ])

function App() {
  return <RouterProvider router={router}/>
}

export default App