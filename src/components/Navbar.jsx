import React, { Component } from "react";
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link to='/' className="navbar-brand">
            <i class="fas fa-rss"></i>&nbsp; REACT NEWS
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
