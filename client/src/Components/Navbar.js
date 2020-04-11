import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <header class="navbar"
        style={{
            backgroundColor: "blue",
        }}
        >
            <a style={{
                color: "gold"
            }} href="..." class="navbar-brand mr-2">Google Books</a>
            <NavLink style={{
                color: "gold"
            }} to="/search" class="btn btn-link">Search</NavLink>
            <NavLink style={{
                color: "gold"
            }} to="/saved" class="btn btn-link">Saved</NavLink>
        </header>
    );
}