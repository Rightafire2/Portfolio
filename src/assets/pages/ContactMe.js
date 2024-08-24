import { Contact } from "../components/Contact";
import React from "react";
import '../styling/portfolio.css'

export const ContactMe = ({ mode }) => {
    return (
        <main>
            <br />
            <br />
            <br />
            <h1 className={`px-auto pt-auto text-${mode === 'light' ? 'dark' : 'white'}`}>CONTACT ME</h1>
            <br />
            <h3 className={`text-${mode === 'light' ? 'dark' : 'white'}`} style={{ textAlign: "center" }}>Feel free to contact me below!</h3>
            <br />
            <Contact mode={mode} />
        </main>
    )
}