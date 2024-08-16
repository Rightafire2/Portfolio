
import React, { useRef } from 'react';
import Swal from 'sweetalert2'

/* AWS Email Integration and handleSend function referenced from https://www.youtube.com/watch?v=-_hRWBpaJZk&t=98s */
export const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSend = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    console.log(name);
    console.log(name.toString());
    const email = emailRef.current.value;
    console.log(email);
    const message = messageRef.current.value;
    console.log(message);

    console.log("here");
    fetch("https://epkhixxemd.execute-api.us-east-2.amazonaws.com/sendemail", {
      mode: "no-cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        senderName: "amoghbharadwaj19@gmail.com",
        senderEmail: "amoghbharadwaj19@gmail.com",
        customerName: name,
        customerEmail: email,
        message: message,
        date: new Date()
      }),
    });
    
    Swal.fire({
      title: "Thank You",
      text: "Your Message Has Been Sent!",
      icon: "success"
    });
  }

  return (
    <>
    <form>
      <label>Name</label>
      <input type="text" name="user_name" ref={nameRef} />
      <label>Email</label>
      <input type="email" name="user_email" ref={emailRef} />
      <label>Message</label>
      <textarea name="message" ref={messageRef} />
      <input type="submit" value="Send" onClick={handleSend} />
    </form>
    </>
  );
};