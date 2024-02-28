import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <Wrapper>
                <section className="contact-short">
                    <div className="grid grid-two-column">
                        <div>
                            <h3>Ready to get started?</h3>
                            <h3>Talk to us today</h3>
                        </div>

                        <div className="get-started-btn">
                            <Button className="btn hireme-btn">
                                <NavLink to="/">Get Started</NavLink>
                            </Button>
                        </div>
                    </div>
                </section>
                {/* footer section */}

                <footer>
                    <div className="container grid grid-four-column">
                        <div className="footer-about">
                            <h3 className="title-text">ARGHA STORE</h3>
                            <p><a className="footer-link" href="/" target="_blank" rel="noreferrer">Privacy Policy</a></p>
                            <p><a className="footer-link" href="/" target="_blank" rel="noreferrer">Terms & Conditions</a></p>
                        </div>
                        <div className="footer-subscribe">
                            <h3 className="title-text">Subscribe to stay updated</h3>
                            <form action="#">
                                <input type="email" name="email" placeholder="YOUR E-MAIL" />
                                <input type="submit" value="subscribe" />
                            </form>
                        </div>
                        <div className="footer-social">
                            <h3 className="title-text">Follow Us</h3>
                            <div className="footer-social-icons">
                                <div>
                                    <FaDiscord className="icons" />
                                </div>
                                <div>
                                    <FaInstagram className="icons" />
                                </div>
                                <div>
                                    <a
                                        href="https://www.youtube.com/"
                                        target="_blank" rel="noreferrer">
                                        <FaYoutube className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <h3 className="title-text">Call Us</h3>
                            <h3 className="title-text">24 / 7 Customer Support</h3>
                            <h3>+91 12345678978</h3>
                        </div>
                    </div>

                    <div className="footer-bottom-section">
                        <hr />
                        <p className="footer-text">{new Date().getFullYear()} &copy; ArghaStore - All Rights Reserved</p>
                    </div>
                </footer>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
    .contact-short {
        max-width: 60vw;
        margin: auto;
        padding: 5rem 10rem;
        background-color: ${({ theme }) => theme.colors.bg};
        border-radius: 1rem;
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};
        transform: translateY(50%);

        .grid div:last-child {
            justify-self: end;
            align-self: center;
        }
    }

    footer {
        padding: 14rem 0 9rem 0;
        background-color: ${({ theme }) => theme.colors.footer_bg};
        h3 {
            color: ${({ theme }) => theme.colors.hr};
            margin-bottom: 2.4rem;
        }
        p {
            color: ${({ theme }) => theme.colors.white};
        }
        .footer-social-icons {
            display: flex;
            gap: 2rem;

            div {
                padding: 1rem;
                border-radius: 50%;
                border: 2px solid ${({ theme }) => theme.colors.white};

                .icons {
                    color: ${({ theme }) => theme.colors.white};
                    font-size: 2.4rem;
                    position: relative;
                    cursor: pointer;
                }
            }
        }
    }

    .footer-contact,
    .footer-social,
    .footer-subscribe,
    .footer-about {
        padding: 2rem;
    }

    .footer-bottom-section {
        padding-top: 3rem;

        hr {
            margin-bottom: 1rem;
            color: ${({ theme }) => theme.colors.hr};
            height: 0.1px;
        }
    }

    .footer-text {
        text-align: center;
        font-size: 2rem;
    }

    .footer-link {
        text-decoration: underline;
        color: white;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .contact-short {
            max-width: 80vw;
            margin: 2rem auto;
            transform: translateY(0%);
            text-align: center;
            padding: 1rem;
        }

        footer {
            padding: 2rem 0;
        }

        .title-text {
            font-size: 3rem;
        }

        .get-started-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
    }
`;

export default Footer;