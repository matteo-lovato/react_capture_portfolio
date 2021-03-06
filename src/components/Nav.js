import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Nav() {
    const { pathname } = useLocation();
    return (
        <StyledNav>
            <h1>
                <Link id="logo" to="/">
                    Capture
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/" ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/work" ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{
                            width: pathname === "/contact" ? "50%" : "0%",
                        }}
                    />
                </li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    padding: 1rem 10rem;
    position: sticky;
    top: 0;
    z-index: 10;
    background: #282828;
    a {
        color: white;
        text-decoration: none;
        padding: 0.2rem 0.2rem;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 2rem 1rem;
        li {
            padding: 0;
        }
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
        }
        #logo {
            display: inline-block;
            margin: 2rem;
        }
    }
`;

const Line = styled(motion.div)`
    background: #23d997;
    height: 0.3rem;
    position: absolute;
    bottom: -80%;
    left: 60%;
    width: 0%;
    @media (max-width: 1300px) {
        left: 0%;
    }
`;

export default Nav;
