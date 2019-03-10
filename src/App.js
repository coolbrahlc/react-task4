import React, { Component } from 'react';
import Users from "./components/Users";
import SelectedBar from "./components/SelectedBar.js";
import './App.sass';
import './index.css';
import users from "./usersArray";



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedUsers: [],
            users: users,
        };
    }

    onDelete = userName => {
        this.setState(state => {
            const selectedUsers = state.selectedUsers.filter((user) => {
                if (user.name !== userName) {
                    return user;
                }
                user.checked = !user.checked;

            });

            return {
                selectedUsers
            };
        });
    };

  onClick = (userName) => {

    this.state.users.some((user)=>{

        if (user.name===userName) {
            const userAlreadySelected = this.state.selectedUsers.some((user)=> user.name === userName);

            if (userAlreadySelected)
            {
                return this.onDelete(user.name);
            }
            user.checked = !user.checked;

            this.setState( state => {
                const selectedUsers = state.selectedUsers.concat(user);
                const users = state.users;

                return {
                    selectedUsers,
                    users
                };
            })
        }
    });
  };

  render() {
      return (
          <div className="mainContainer">
              <div className="selectedColumn">
                  <div>To: </div>
                  <SelectedBar
                      selectedUsers={this.state.selectedUsers}
                      onDelete={this.onDelete}
                  />
              </div>
              <Users
                users={this.state.users}
                onClick={this.onClick}
              />
          </div>
      )
  }
}

export default App;
