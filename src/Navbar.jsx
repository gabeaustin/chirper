import React from "react";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Chirper</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Make a Chirp</a>
            </div>
        </nav>
     );
}
 
export default Navbar;