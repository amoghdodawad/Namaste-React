import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';


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
                    <Body/>
                </div>
            </>
        );
    }
    root.render(<AppLayout/>);
})