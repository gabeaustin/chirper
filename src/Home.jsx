import React from "react";
import { useState } from "react";

const Home = () => {
    // let name = "Gabriel";
    {/* this is array destructuring (line below) */}
    const [name, setName] = useState("Gabe"); {/* useState is the hook */}
    const [age, setAge] = useState(25);

    const handlePostChirpClick = () => {
        setName("Luigi");
        setAge(30);
    }

    return (
        <div className="home">
            <div className="welcomeMessage">
                {/* remove word "homepage" once push to production (line below) */}
                <h1>Welcome to Chirper (homepage)</h1> 
                <h3>Chirp it Out</h3>
                <h5>Did you get what I was trying to do there?</h5>
            </div>
            <p>{ name } is { age } years old.</p>
            <button onClick={handlePostChirpClick}>Post Chirp</button>

            {/* Put array/list of Chirps HERE */}
        </div>
    );
};

export default Home;