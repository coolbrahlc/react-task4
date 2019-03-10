import React, { Component } from 'react';
import SelectedUser  from "./SelectedUser.js";

const SelectedBar = ({selectedUsers, onDelete}) =>{
    return (
        selectedUsers.map((user)=>
            (
                <SelectedUser key={user.name}
                      name={user.name}
                      onDelete={onDelete}
                />
            )
        )
    )
};


export default SelectedBar;
