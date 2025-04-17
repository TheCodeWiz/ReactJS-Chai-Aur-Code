import React, { useState } from 'react'
import UserContext from './UserContext'

// children is just a generic name but it is same as div and its work is to pass the things that are coming to it 
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return (
        // wrapping is done but what value you are giving access to and to answer this we get an prop named value in userContext wrapper
        <UserContext.Provider value={{user, setUser}}>
        {children} {/*} whatever is comming pass as it is */}
        </UserContext.Provider>
    )
}

export default UserContextProvider