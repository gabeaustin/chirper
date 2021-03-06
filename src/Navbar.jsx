import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Chirper</a>
            
                <ul class="navbar-nav">
                    <li className="nav-item links">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    {/* <li className="nav-item links">
                        <a className="nav-link" href="/create">Make a Chirp</a>
                    </li> */}
                </ul>
            </div>
        </nav>
     );
};
 
export default Navbar;