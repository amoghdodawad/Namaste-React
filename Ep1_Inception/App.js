window.addEventListener('DOMContentLoaded',()=>{
    // const heading = React.createElement("h1",{},"Hello world from React");
    const root = ReactDOM.createRoot(document.getElementById('root'));
    // console.log(heading);
    const parent = React.createElement('div',{id:'parent'},[
        React.createElement('div',{id:'child'},[
            React.createElement('h1',{},'I am h1 tag'),
            React.createElement('h2',{},'I am h2 tag')
        ]),
        React.createElement('div',{id:'child2'},[
            React.createElement('h1',{},'I am h1 tag'),
            React.createElement('h2',{},'I am h2 tag')
        ])
    ]);
    console.log(parent);
    root.render(parent);
})