import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.name+"Parent constructor");
    }

    componentDidMount(){
        console.log(this.props.name+"Parent component did mount")
    }

    render(){
        console.log("Parent rendered");
        return (
            <div>
                <h1>About</h1>
                <h2>This is namaste react</h2>
                <UserClass name="Amogh from class" location="Dharwad" twitterId="@AmoghDodawad"/>
            </div>
        );
    }
}

// const About = () =>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is namaste react</h2>
//             <UserClass name="Amogh from class" location="Dharwad" twitterId="@AmoghDodawad"/>
//         </div>
//     );
// }

/*

    // Order of execution

    - Parent constructor
    - Parent render
        - Child1 constructor
        - Child1 rendered
        - Child2 constructor
        - Child2 rendered
        - Child1 componentDidMount()
        - Child2 componentDidMount()
    - Parent componentDidMount()

    Here the both children are first constructor-ed and rendered
    and then both of them are mounted. This is done by React for 
    optimisation purposes.

    The reason behind it is explained in React life cycle diagram.

    So whenever there is more than one child that needs to mounted,
    UserClass in this case, React batches together the the render
    cycles of the child and then their commit phase will be batched,
    that's why the order of execution is so.

    So.... React performs the commit phase only after completion of
    their render phase is because render phase just deals with virtual
    DOM and hence it extremely fast, whereas commit phase deals with 
    actual DOM Manipulation hence it takes lot of time. This is the
    reason why React does what it does.
*/

export default About;