import React, { Component } from 'react';
import axios from 'axios';

import UserList from './components/UsersList';
import AddUser from './components/AddUser';
import About from './components/About';


class App extends Component {
    constructor(){
        super();
        this.state = {
            users: [],
            username: '',
            email: '',
        };
        this.addUser = this.addUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount(){
        this.getUsers();
    };

    getUsers(){
        axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
        .then((res) => { this.setState({ users: res.data.data.users }); })
        .catch((err) => { console.log(err); });
    };

    addUser(event){
        event.preventDefault();
        const data = {
            username: this.state.username,
            email: this.state.email
        };
        axios.post(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`, data)
        .then((res) => {
            this.getUsers();
            this.setState({ username: '', email: ''});
        })
        .catch((err) => { console.log(err); })
    };

    handleChange(event){
        const obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    };

    render(){
        return(
            <section className="section">
                <div className="container">
                    <div className="colums">
                        <div className="column is-half">
                            <br/>
                            <h1 className="titleis-1">All Users</h1>
                            <hr/><br/>
                            <AddUser
                                username={this.state.username}
                                email={this.state.email}
                                addUser={this.addUser}
                                handleChange={this.handleChange}
                            />
                            <br/><br/>
                            <UserList users={this.state.users}/>
                            <br/>
                            <About/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

export default App;