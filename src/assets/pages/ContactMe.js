import { Contact } from "../components/Contact";
import React from "react";
import '../styling/portfolio.css'

export const ContactMe = ({ mode }) => {
    return (
        <>
        <h1 className={`px-5 pt-5 text-${mode === 'light' ? 'dark' : 'white'}`}>CONTACT ME</h1>
        <br />
        <br />
        <Contact />
        </>
    )
}