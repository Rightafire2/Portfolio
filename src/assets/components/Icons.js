import React from "react";
import { FaFacebook, FaXTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa6'
import '../styling/icons.css'

export const SocialIcons = () => {
    return (
        <section className="d-flex justify-content-center container-icons">
            <div className="d-flex flex-row m-3 justify-content-evenly icons">
                <a href="https://www.facebook.com/p/Amogh-Bharadwaj-100014198475216/" style={{ color: "black" }} target="_blank">
                    <FaFacebook className="icon" />
                    </a>
                <a href="https://twitter.com/bharadwaj_amogh" style={{ color: "black" }} target="_blank">
                    <FaXTwitter className="icon" />
                </a>
                <a href="https://www.instagram.com/bharadwajamogh/" style={{ color: "black" }} target="_blank">
                    <FaInstagram className="icon" />
                </a>
                <a href="https://github.com/Rightafire2/" style={{ color: "black" }} target="_blank">
                    <FaGithub className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/amogh-bharadwaj-5349bb168" style={{ color: "black" }} target="_blank">
                    <FaLinkedin className="icon" />
                </a>
            </div>
        </section>
    )
}