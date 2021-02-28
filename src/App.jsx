import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";


const App = () => {  
    
    const handleButtonClick = () => {
        setCounter(counter + 1);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [counter, setCounter] = useState(0);
    
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Home />
            </div>

            {/* have chirps to display here  */}
            <div className="display-chirp-feed">
                <h1>The current count is {counter}.</h1>
                <input value={email} onChange={e => setEmail(e.target.value)} />
                <input value={password} onChange={handlePasswordChange} />
                <button onClick={handleButtonClick}>Click me to increment!</button>
            </div>
        </div>
    );
}

export default App;