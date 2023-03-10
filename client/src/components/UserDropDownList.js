import React from "react";

function UserDropDownList({user}) {

    return(<option value={user.id}>{user.username}</option>)
}

export default UserDropDownList