import React, { Component } from 'react';

const SelectedUser = ({name, onDelete}) =>{
    return (
        <div className="selectedUsersContainer">
            <span>
                {name}
            </span>
            <div className="removeButton" onClick={() =>onDelete(name)}>
                X
            </div>
        </div>
    )
};

export default SelectedUser;