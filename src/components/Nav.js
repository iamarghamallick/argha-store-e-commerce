import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { TiShoppingCart } from "react-icons/ti";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from '../context/cartContext';

const Nav = () => {
    const { totalItem } = useCartContext();
    const [showMenuIcon, setShowMenuIcon] = useState(false);

    return (
        <Wrapper>
            <div className={showMenuIcon ? "navbar active" : "navbar"}>
                <ul className="navbar-lists">
                    <li>
                        <NavLink to={"/"} className="navbar-link" onClick={() => setShowMenuIcon(false)}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/products"} className="navbar-link" onClick={() => setShowMenuIcon(false)}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"} className="navbar-link" onClick={() => setShowMenuIcon(false)}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"} className="navbar-link" onClick={() => setShowMenuIcon(false)}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/cart"} className="navbar-link cart-trolley-link" onClick={() => setShowMenuIcon(false)}>
                            <TiShoppingCart className='cart-trolley' />
                            <span className='cart-total-item'>{totalItem}</span>
                        </NavLink>
                    </li>
                </ul>

                {/* mobile navbar button  */}
                <div className="mobile-navbar-btn">
                    {!showMenuIcon && <CgMenu
                        name="menu-outline"
                        className="mobile-nav-icon"
                        onClick={() => setShowMenuIcon(!showMenuIcon)}
                    />}
                    {showMenuIcon && <CgClose
                        name="close-outline"
                        className="mobile-nav-icon"
                        onClick={() => setShowMenuIcon(!showMenuIcon)}
                    />}
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    .navbar-lists {
        display: flex;
        gap: 4.8rem;
        align-items: center;

        .navbar-link {
            &:link,
            &:visited {
                display: inline-block;
                text-decoration: none;
                font-size: 1.8rem;
                font-weight: 500;
                text-transform: uppercase;
                color: ${({ theme }) => theme.colors.black};
                transition: color 0.3s linear;
                background-color: white;
                padding: 6px;
                border-radius: 8px;
            }

            &:hover,
            &:active {
                color: ${({ theme }) => theme.colors.helper};
            }
        }
    }

    .mobile-navbar-btn {
        display: none;
        background-color: transparent;
        cursor: pointer;
        border: none;
    }

    .close-outline {
        display: none;
    }

    .cart-trolley-link {
        position: relative;

        .cart-trolley {
            position: relative;
            font-size: 3.2rem;
        }

        .cart-total-item {
            width: 2.4rem;
            height: 2.4rem;
            position: absolute;
            background-color: #000;
            color: white;
            border-radius: 50%;
            display: grid;
            place-items: center;
            top: -20%;
            left: 70%;
            background-color: blue;
        }
    }

    .user-login-name {
        text-transform: capitalize;
    }

    .user-logout,
    .user-login {
        font-size: 1.4rem;
        padding: 0.8rem 1.4rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .mobile-navbar-btn {
            display: inline-block;
            z-index: 9999;
            border: ${({ theme }) => theme.colors.black};

            .mobile-nav-icon {
              font-size: 4.2rem;
              color: ${({ theme }) => theme.colors.black};
            }
        }

        .navbar-lists {
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 7rem;
            left: 0;
            background-color: #fff;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            visibility: hidden;
            opacity: 0;
            transform: translateX(100%);
            transition: all 3s linear;
        }

        .active .navbar-lists {
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
            z-index: 999;
            transform-origin: right;
            transition: all 3s linear;

            .navbar-link {
                font-size: 4rem;
            }
        }
        .cart-trolley-link {
            position: relative;

            .cart-trolley {
              position: relative;
              font-size: 5.2rem;
            }

            .cart-total-item {
              width: 4.2rem;
              height: 4.2rem;
              font-size: 2rem;
            }
        }

        .user-logout,
        .user-login {
            font-size: 2.2rem;
            padding: 0.8rem 1.4rem;
        }
    }
    `;

export default Nav