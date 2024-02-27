import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { TiShoppingCart } from "react-icons/ti";

const Nav = () => {
    const Nav = styled.nav`
        position: relative;
        .navbar-lists {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4rem;
        }
        .navbar-link {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            font-weight: 500;
            text-transform: uppercase;
            color: black;
            transition: color 0.3s linear;
            background-color: white;
            padding: 8px;
            border-radius: 6px;
        }
        .cart-link {
            background-color: unset;
        }
        .shopping-cart-icon {
            position: relative;
            font-size: 3.2rem;
        }
        .cart-total-items {
            height: 2.4rem;
            width: 2.4rem;
            position: absolute;
            background-color: blue;
            border-radius: 50%;
            color: white;
            display: grid;
            place-items: center;
            top: -5%;
            left: 97%;
        }
    `
    return (
        <Nav>
            <div className="navbar">
                <ul className="navbar-lists">
                    <li>
                        <NavLink to={"/"} className="navbar-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/products"} className="navbar-link">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"} className="navbar-link">About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"} className="navbar-link">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/cart"} className="navbar-link cart-link">
                            <TiShoppingCart className='shopping-cart-icon' />
                            <span className='cart-total-items'>10</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </Nav>
    )
}

export default Nav