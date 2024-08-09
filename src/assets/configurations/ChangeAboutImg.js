import { useState } from "react";
import img from '../images/me.jpg'

export const AboutImg = () => {
    const [ over, state] = useState(false);
  
    const onOver = () => {
      state(true);
    };
  
    const offOver = () => {
      state(false);
    };

    return (
        <img
            src={img}
            className="col-md-4 img-fluid"
            alt="Picture of Amogh"
            onMouseEnter={onOver}
            onMouseLeave={offOver}
            onFocus={onOver}
            style={{ justifyContent: 'center', padding: 0, scale: over ? "120%" : "100%", objectFit: 'cover' }} />
    )


  } 