import React from "react";

const ChirpList = ({ chirp }) => {
    return (
        <div>
            <h3>{chirp.chirpBody}</h3>
            <h6>{chirp.chirpAuthor}</h6>
        </div>
    )
};

export default ChirpList;