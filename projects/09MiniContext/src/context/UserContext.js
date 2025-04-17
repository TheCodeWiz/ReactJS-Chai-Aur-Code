// this file has .js extension since it has pure javascript 
// like we have created context of user ,in the same way we can also create a context for login, product, card., etc.

import React, { useContext } from "react";

const UserContext = React.createContext() // createContext is a method same as useState method

export default UserContext;

// this was all about part one 

// now context is created so it will give you a provider since every context is a provider and here in our case UserContext is also a provider in itself

// if we wrap our code with the context just created then our context becomes provider 

/*
eg: 
<UserContext>
<Login/>
<Card>
    <Data />
</Card>
<UserContext/>

here userContext is not a context anymore but now it became a provider
*/


// after creating the context we have to create a provider too. 