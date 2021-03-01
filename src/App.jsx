import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";


const App = () => {  

    const handleButtonClick = () => {
        setCount(count + 1);
    }
    
    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handleChirpBodyChange = event => {
        setChirpBody(event.target.value);
    }

    
    const [count, setCount] = useState(0);
    const [email, setEmail] = useState("");
    
    const [chirpBody, setChirpBody] = useState("");
    
    useEffect(() => {
        console.log("effect running!");
        document.title = `You have clicked ${count} times`;
    }, [count]);
    
    useEffect(() => {
        console.log(`searching database for ${chirpBody}`)
    }, [chirpBody]);
    
    const handleClick = event => {
        event.preventDefault();
        console.log("btn clicked and form submitted " + chirpBody);
        setChirpBody("");
    }

    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Home />
            </div>

            {/* have chirps to display here  */}
            <div className="display-chirp-feed">
                <p>
                    {/* <h1>You have clicked {count} times.</h1> */}
                    {/* <button onClick={handleButtonClick}>Update the count state!</button> */}
                </p>
                {/* <input value={chirpBody} onChange={handleChirpBodyChange} onClick={handleClick}/> */}
                
            </div>
        </div>
    );
}

export default App;