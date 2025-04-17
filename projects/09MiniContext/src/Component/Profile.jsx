// here we are going to learn how to access the data

import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    // we are not going to simply return it rather we are going to return it conditionally
    if (!user) return <div>Please Login</div>

    return <div>Welcome, Mr. {user.username}</div>
}

export default Profile