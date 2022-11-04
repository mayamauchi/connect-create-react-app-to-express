import { Component } from "react";

class Users extends Component {
  //constructor is a class
  constructor(props) {
    super(props);
    //would use useState, but useState can only be used with functional components with hooks. Constructor is a class so we instead use this.state
    this.state = {
      users: [],
    };
  }
  //invoked immediately after the component is inserted into the DOM, specifically the mounting stage of the React cycle.
  componentDidMount() {
    //fetch is a promise. A node module that fetches http request
    fetch("/api/users")
      //.json is a javascript response interface that also returns a promise
      .then((res) => res.json())
      .then((users) => {
        this.setState({ users: users });
      });
  }
  render() {
    return (
      <ul>
        {this.state.users.map((user) => (
          <li>
            Username {user.username}, Age: {user.age}
          </li>
        ))}
      </ul>
    );
  }
}
export default Users;
