import React, { useState } from "react";
//create context
const UserContext = React.createContext();
//create context provider

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const currentUser = {
        name: "Duane",
        interests: ["coding", "Biking", "Words ending in 'ing'"],
    }
    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    return (
        <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
    )
}

export { UserContext, UserProvider };