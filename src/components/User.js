import React from 'react';

const User = ({name, level, checked, avaUrl, onCheck}) => {

    let className = 'checkbox';

    if (checked) {
        //className.concat("-checked");
        className = 'checkbox-checked';
        console.log(className)
        console.log(name)

    }

    return (
             <div className="userRowContainer">
                 <img className="userAavatar" src={avaUrl} srcSet={avaUrl} alt=""/>
                 <div className="userNameCol">
                     <div>{name}</div>
                     <div>Level {level}</div>
                 </div>

                 <div className={className} onClick={() => onCheck(name)}>{checked}</div>
             </div>
    );
};


export default User;
