import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import '../styling/icons.css'

export const Icons = () => {
    return (
        <div className="d-flex flex-row m-3 justify-content-evenly icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaGithub />
            <FaLinkedin />
        </div>
    )
}