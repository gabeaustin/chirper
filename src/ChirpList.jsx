import React from "react";

const ChirpList = ({ chirps, title }) => {
    // const chirps = props.chirps;
    // const title = props.title;

    return (
        <div className="chirp-list">
            <h2>{ title }</h2>
            {chirps.map((chirp) => (
                <div className="chirp-box" key={chirp.id}>
                    <p className="chirp-text">
                        <h4>{chirp.chirpBody}</h4>
                        <h6>Chirped by {chirp.chirpAuthor}</h6>
                    </p>
                </div>
            ))}
        </div>
    );
}

export default ChirpList;