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
        setChirps({ ...chirps, chirpBody: event.target.value })
    }

    const handleChirpAuthorInput = (event) => {
        setChirps({ ...chirps, chirpAuthor: event.target.value })
    }

    const handleClick = event => {
        event.preventDefault();
        console.log("btn clicked and form submitted " + chirpBody);
        setChirpBody("");
    }

    return (
        <div className="home">
            <div className="welcome-message">
                <h1>Welcome to Chirper</h1>
            </div>

            {/* Need to work on getting a list of all the chirps */}






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

                <div class="button-container text-center`">
                    <button
                        type="submit"
                        class="btn btn-outline-info text-nowrap btn-lg"
                        onClick={handleClick}>
                        Post Chirp
                    </button>

                    <ChirpList2 />
                </div>
            </form>
        </div>
    );
};

export default Home;