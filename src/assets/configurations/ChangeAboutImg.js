import { useState } from "react";
import img from '../images/me.jpg';
import '../styling/aboutimg.css';

/* Holds Image for the AboutMe Page and increases size based on whether image is hovered or focused */
export const AboutImg = () => {
    const [over, setOver] = useState(false);

    const onOver = () => {
        setOver(true);
    };

    const offOver = () => {
        setOver(false);
    };

    return (
        <div className="image-container">
            <img
                src={img}
                className="about-img"
                alt="Picture of Amogh"
                onMouseEnter={onOver}
                onMouseLeave={offOver}
                onFocus={onOver}
                style={{ transform: over ? "scale(1.2)" : "scale(1)" }}
            />
        </div>
    );
}
