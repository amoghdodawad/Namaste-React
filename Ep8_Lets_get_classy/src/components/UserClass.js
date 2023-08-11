import React from 'react';
class UserClass extends React.Component {
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            count : 0,
            userInfo : {

            }
        }
        console.log(this.props.name+"Child constructor");

        
    }

    async componentDidMount(){
        // console.log(this.props.name+"Child component did mount");
        const data = await fetch('https://api.github.com/users/amoghdodawad');
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json
        })
    }

    inc(){
        this.setState({
            count : this.state.count+1
        })
    }

    UNSAFE_componentWillUpdate(){
        console.log("Child about to be updated");
    }

    /*
        In functional based components we used to make an async functions 
        and call that function in useEffect hook. Here in class based
        components we can directly make the componentDidUpdate hook itself
        as async.
    */
    componentDidUpdate(){
        console.log("Child got updated");
        
    }

    render(){
        // console.log(this.props);
        const { count } = this.state; 
        const { name, twitter_username, location ,avatar_url} = this.state.userInfo;
        console.log(this.props.name+"Child rendered");
        return (
            <div className="user-card">
                <h1>Count = {count}</h1>
                <button onClick={() =>{
                    this.inc();
                }}>
                    Increase Count
                </button>
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @{twitter_username}</h4>
            </div>
        );
    }
}

export default UserClass;