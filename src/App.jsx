import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import ChirpList from "./ChirpList";


const App = () => {  
    const [chirpAuthor, setChirpAuthor] = useState("");
    const [chirpBody, setChirpBody] = useState("");
    const [chirps, setChirps] = useState([
        { body: "Lorem ipsum vaccine the new normal virtual happy hour Blursday.", author: "birthday_boy", id: 1 },
        { body: "Netflix self care home haircut droplet Lysol spray.", author: "netflixChill", id: 2 },
        { body: "Lorem ipsum Queen's Gambit sanitizer Dr. Fauci ballot.", author: "fauci-for-Pres", id: 3 }
    ]);

    const handleChirpBodyInput = event => {
        setChirpBody(event.target.value);
        // setChirps({ ...chirps, chirpBody: event.target.value })
    }

    const handleChirpAuthorInput = event => {
        setChirpAuthor(event.target.value);
        // setChirps({ ...chirps, chirpAuthor: event.target.value })
    }
    
  
    let submitButton = () => {
        let newChirp = {
            body: chirpBody,
            author: chirpAuthor
        }

        setChirps([...chirps, newChirp]);
        emptyInputs();
    }

    let emptyInputs = () => {
        setChirpBody("");
        setChirpAuthor("");
    }

    let listOfChirps = chirps.map((chirp, id) => <ChirpList key={id} chirp={chirpBody} />);

    return (
        <div className="App">
            <Navbar />
            <Home />

            <form className="form-container">
                <textarea
                    value={chirpBody}
                    onChange={handleChirpBodyInput}
                    id="chirp-body"
                    class="form-field"
                    placeholder="What do you want to say?"
                    name="chirpBody"
                    required>
                </textarea>

                <input
                    value={chirpAuthor}
                    onChange={handleChirpAuthorInput}
                    type="text"
                    id="chirp-author"
                    class="form-field"
                    placeholder="Enter your name"
                    name="chirpAuthor"
                    required
                />

                <div class="button-container text-center">
                    <button
                        type="submit"
                        class="btn btn-outline-info text-nowrap btn-lg"
                        onClick={submitButton}>
                        Post Chirp
                    </button>
                
                <div className="display-chirp-feed">
                    {/* {listOfChirps} */}
                </div>
                
                </div>
            </form>
        </div>
    );
}

export default App;