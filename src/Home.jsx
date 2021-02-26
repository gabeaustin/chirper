import React from "react";
import { useState } from "react";

const Home = () => {
    const [chirps, setChirps] = useState([
        { body: "Lorem ipsum vaccine the new normal virtual happy hour Blursday.", author: "birthday_boy", id: 1 },
        { body: "Netflix self care home haircut droplet Lysol spray.", author: "netflixChill", id: 2 },
        { body: "Lorem ipsum Queen's Gambit sanitizer Dr. Fauci ballot.", author: "fauci-for-Pres", id: 3 }
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

            {chirps.map((chirp) => (
                <div className="chirp-box" key={chirp.id}>
                    <p className="chirp-text">
                        <h4>{chirp.body}</h4>
                        <h6>Chirped by {chirp.author}</h6>
                    </p>
                </div>
            ))}
            
            <p>{ name } is { age } years old.</p>

            {/* Put array/list of Chirps HERE */}
        </div>
    );
};

export default Home;