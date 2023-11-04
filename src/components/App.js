import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";

//get the provider
import { UserProvider } from "../context/user";


function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  return (
    <main className={theme}>
      <UserProvider>
        <Header theme={theme} setTheme={setTheme} />
        <Profile theme={theme} />
      </UserProvider>
    </main>
  );
}

export default App;
