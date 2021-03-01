import React from "react";
import "./styles.css";
import { useState } from "react";
import ChirpList from "./ChirpList";

const Home = () => {
    const [submitted, setSubmitted] = useState(false);
    const [chirps, setChirps] = useState(
        // chirpBody: "",
        // chirpAuthor: ""
        { body: "Lorem ipsum vaccine the new normal virtual happy hour Blursday.", author: "birthday_boy", id: 1 },
        { body: "Netflix self care home haircut droplet Lysol spray.", author: "netflixChill", id: 2 },
        { body: "Lorem ipsum Queen's Gambit sanitizer Dr. Fauci ballot.", author: "fauci-for-Pres", id: 3 }
    );

    const handleChirpBodyInput = (event) => {
        setChirps({...chirps, chirpBody: event.target.value})
    }

    const handleChirpAuthorInput = (event) => {
        setChirps({...chirps, chirpAuthor: event.target.value})
    }

    const handleSubmit = (event) => {
        // need help with this
        setSubmitted(true);
        alert("You submitted a Chirp");
    }

    return (
        <div className="home">
            <div className="welcome-message">
                <h1>Welcome to Chirper</h1> 
            </div>
            
            {/* Need to work on getting a list of all the chirps */}
            {/* <ChirpList chirps={chirps} title="Recent Chirps!" /> */}

            <form className="form-container">
                <textarea 
                    value={chirps.chirpBody}
                    onChange={handleChirpBodyInput}
                    id="chirp-body" 
                    class="form-field"
                    placeholder="What do you want to say?"
                    name="chirpBody"
                    required>
                </textarea>
                <p>Characters Left: </p> {/* max 180 Characters */}

                <input 
                    value={chirps.chirpAuthor}
                    onChange={handleChirpAuthorInput}
                    type="text"
                    id="chirp-author"
                    class="form-field"
                    placeholder="Enter your name"
                    name="chirpAuthor"
                    required
                />
            </form>
            <div className="button-container text-center">
                <button 
                    type="submit" 
                    class="submit-button btn btn-outline-info text-nowrap btn-lg" 
                    onClick={handleSubmit}>
                        Post Chirp
                </button>
            </div>
        </div>
    );
};

export default Home;