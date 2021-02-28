import React from "react";

const Create = () => {
    return (
        <div className="create">
            <h2>Add a Chirp</h2>
            <form>
                <label>Body of Chirp: </label>
                <textarea required />
                
                <label>Author of Chirp: </label>
                <input type="text" required />

                <button 
                    type="button" 
                    class="btn btn-outline-info text-nowrap btn-lg" >
                    {/* onClick={handlePostChirpClick}> */}
                        Post Chirp
                </button>
            </form>
        </div>
    );
};

export default Create;