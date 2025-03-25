import React from 'react' ;

const UserCard = ({name,age}) => {

    return (
        <div>
            <h3>User name : {name}</h3>
            <h4>Age of User : {age}</h4>
        </div>
    )
}

export default UserCard