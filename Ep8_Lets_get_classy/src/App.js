import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';


/*
    Everything in react is a component, so to design a website we need to first of all 
    plan our layout using wireframes etc. and then think about how that can be translated
    into react components.

    -------------------------------------------------------------------------------------
    |   |---------------------------------------------------------------------------|   |
    |   | |------|                                |-----------------------------|   |   |
    |   | | Logo |                                |       Nav bar etc.          |   |   |
    |   | |------|                                |-----------------------------|   |   |
    |   |---------------------------------------------------------------------------|   |
    |                                                                                   |
    |  |------------------------------------------------------------------------------| |
    |   |-------------------|  |------|                                                 |
    |   |                   |  |Search|                                                 |
    |   |-------------------|  |------|                                                 |
    |                                                                                   |
    |   |---------------------------------------------------------------------------|   |
    |   |       Restaurant container                                                |   |
    |   |   |---------------|           |---------------|                           |   |
    |   |   |  Rest. cards  |           |  Rest. cards  |                           |   |
    |   |   |      IMG      |           |      IMG      |                           |   |
    |   |   |      ----     |           |      ----     |                           |   |
    |   |   |               |           |               |                           |   |
    |   |   |---------------|           |---------------|                           |   |
    |   |                                                                           |   |
    |   |                                                                           |   |
    |   |                                                                           |   |
    |   |---------------------------------------------------------------------------|   |
    |  |------------------------------------------------------------------------------| |
    |                                                                                   |
    |    |--------------------------------------------------------------------------|   |
    |    |                         Footer                                           |   |
    |    |                                                                          |   |
    |    |--------------------------------------------------------------------------|   |
    |                                                                                   |
    |-----------------------------------------------------------------------------------|

    This will be the layout for our project, hence these will be the components
    - Header
        - Logo
        - Nav items
    - Body
        - Search
        - RestaurantContainer
            - RestaurantCard
                - Image
                - Name of res
                - Star rating
                - Cuisines
                - Delivery time
    - Footer
        - Copyright
        - Links
        - Address
        - Contact

*/
window.addEventListener('DOMContentLoaded',()=>{
    const root = ReactDOM.createRoot(document.getElementById('root'));

    const AppLayout = () => {
        return (
            <>
                <div className='app'>
                    <Header/>
                    <Outlet/>
                </div>
            </>
        );
    }
    const appRouter = createBrowserRouter([
        {
            path : '/',
            element : <AppLayout/>,
            children : [
                {
                    path : '/',
                    element : <Body/>
                },
                {
                    path : '/about',
                    element : <About/>
                },
                {
                    path : '/contact',
                    element : <Contact/>
                },{
                    path : '/restaurants/:resId',
                    element : <RestaurantMenu/>
                }
            ],
            errorElement : <Error/>
        },
        
    ]);
    root.render(<RouterProvider router={appRouter}/>);
})