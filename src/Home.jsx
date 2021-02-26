import React from "react";
import { useState } from "react";

const Home = () => {
    const [chirps, setChirps] = useState([
        { body: "Lorem ipsum vaccine the new normal virtual happy hour Blursday.", author: "birthday_boy", timestamp: "", id: 1 },
        { body: "Netflix self care home haircut droplet Lysol spray.", author: "netflixChill", timestamp: "", id: 2 },
        { body: "Lorem ipsum Queen's Gambit sanitizer Dr. Fauci ballot.", author: "fauci-for-Pres", timestamp: "", id: 3 }
    ]);

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
                <h1>Welcome to Chirper</h1> 
            </div>
            
            <button onClick={handlePostChirpClick}>Post Chirp</button>
            
            <p>{ name } is { age } years old.</p>

            {/* Put array/list of Chirps HERE */}
        </div>
    );
};

export default Home;