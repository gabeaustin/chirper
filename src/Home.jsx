import React from "react";
import "./styles.css";
import { useState } from "react";
import ChirpList from "./ChirpList";

const Home = () => {
    const [chirps, setChirps] = useState([
        { body: "Lorem ipsum vaccine the new normal virtual happy hour Blursday.", author: "birthday_boy", id: 1 },
        { body: "Netflix self care home haircut droplet Lysol spray.", author: "netflixChill", id: 2 },
        { body: "Lorem ipsum Queen's Gambit sanitizer Dr. Fauci ballot.", author: "fauci-for-Pres", id: 3 }
    ]);

    const handlePostChirpClick = () => {
        alert("Add new Chirp once clicked.");
    }

    return (
        <div className="home">
            <div className="welcomeMessage">
                <h1>Welcome to Chirper</h1> 
            </div>
            
            <button 
                type="button" 
                class="btn btn-outline-info text-nowrap btn-lg" 
                onClick={handlePostChirpClick}>
                    Post Chirp
            </button>


            <ChirpList chirps={chirps} title="Recent Chirps!" />


            <form>
                <textarea 
                    id="chirpText" 
                    placeholder="What do you want to say?">
                </textarea>

                <input 
                    type="text"
                    id="chirpAuthor"
                    placeholder="Enter your name"
                />

            </form>


        </div>
    );
};

export default Home;