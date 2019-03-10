import React, { Component } from 'react';
import User from "./User";


const Users = ({users, onClick}) =>{
    return (
        users.map((user)=>
           (
               <User key={user.name}
                  name={user.name}
                  avaUrl={user.avaUrl}
                  level={user.level}
                  checked={user.checked}
                  onCheck={onClick}
                />
           )
        )
    )
};


export default Users;
