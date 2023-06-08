/*
    The following code has more comments that actual code because it contains
    all the snippets of the code that had been written and explained by Akshay 
    Saini and subsequently erased. Please uncomment the part that you would like
    to run and vice-versa.
*/


import React from 'react';
import ReactDOM from 'react-dom/client';

window.addEventListener('DOMContentLoaded',()=>{
    const heading = React.createElement("h1",{id: "heading"},"Amogh here");
    const root = ReactDOM.createRoot(document.getElementById('root'));
    /* 
        This jsx code is getting transpiled by parcel before finally reaching js engine!
        Parcel on its own does not do it, it uses a package called Babel to get this done.

                JSX -> React Element - JS Object -> HTML Element (rendering)
    */
    let JSXHeading = <h1>Amogh here using JSX</h1>

    /*
        To create multi-line JSX code, wrap the code in parantheses

    */
    JSXHeading = (
        <h1>Amogh here using JSX but using multi-line JSX</h1>
    );
    // To render a JSX syntax we use the same method : root.render(JSXHeading);
    // console.log("heading");
    // console.log(heading);
    // console.log("JSX");
    // console.log(JSXHeading);

    /*
        React components :
            Everything inside React is a component like buttons, search bar, header, footer etc....
            There are 2 types of React components :
                1) Class based components - OLD way of writing code
                2) Functional components - NEW way of writing code
    */
   
    // Functional component: It is a function that return some JSX
    const HeadingComponent = () =>{
        return <h1>This was written using Functional components</h1>;
    }
    console.log(HeadingComponent);
    /* 
        Rendering a functional component:
            To render a functional components, we use angled brackets
            ex :- to reneder to HeadingComponent we use
            root.render(<HeadingComponent/>);
    */

    const Title = () =>{
        return <h1>This is the title</h1>;
    }
    // Component composition also called as nested components.
    const Component = () =>{
        return (<div id="container">
            <Title/>
            <h1>We are inside Component</h1>
        </div>);
    }
    root.render(<Component/>);

    /*
        Running JS inside component. For that purpose we use
        {};
        Ex :-
        const child = React.createElement();
        const Parent = () =>{
            return (
                <div>
                    {child} OR {console.log("Here")} OR {100+200}
                </div>
            );
        }
        root.render(<Parent/>);
    */

    /*
        Some cool stuff:
        Suppose we get some data from an API, then there is a chance that the data
        might be malicious, leading to XSS. JSX does the job of sanitising that
        data being executed in curly braces before actually executing it
    */

    /*
        We can have only 1 root container/element in a component, but many times
        we come across situations where we need more than 1 root without
        using a root container. In such cases we use React fragments. It behaves
        like a dummy/empty element/tags.

        const title = () =>{
            <React.Fragment>
                <div>
                </div>

                <div>
                </div>
            </React.Fragment>
        }

        if you don't want to use that either then you could just use empty tags and
        it would still work the same.

        const title = () =>{
            <>
                <div>
                </div>

                <div>
                </div>
            </>
        }
    */
})