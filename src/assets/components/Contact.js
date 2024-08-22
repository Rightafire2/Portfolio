import React from 'react';
import Swal from 'sweetalert2'
import { Formik, Form, Field } from 'formik';
import '../styling/contactform.css'
import { SocialIcons } from './Icons.js';

/* AWS Email Integration and handleSend function referenced from https://www.youtube.com/watch?v=-_hRWBpaJZk&t=98s */
const handleSend = ( values) => {
  const { name, email, message } = values;

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

/* Code derived and changed from Formik Documentaion: https://formik.org/docs/guides/validation */
const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Please Enter Your Name';
  }

  if (!values.email) {
    errors.email = 'Please Enter Your Email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Please Enter Your Message'
  }

  return errors;
};

export const Contact = ({ mode }) => {
  const handleSubmit = (values) => {
    console.log("Submitted")
    handleSend(values)
  }

  return (
    <>
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: ''
      }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {/* Mapping Strategy and Touched Handling learned from Formik Documentation: https://formik.org/docs/api/formik */}
      {({ errors, touched }) => (
        <Form className='form-container'>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="name" />
            {errors.name && touched.name ? <div className='error-message'>{errors.name}</div> : null}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div className="error-message">{errors.email}</div> : null}
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <Field name="message" as="textarea" />
            {errors.message && touched.message ? <div className="error-message">{errors.message}</div> : null}
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    <br />
    <SocialIcons />
    <br />
    <br />
    </>
  );

}