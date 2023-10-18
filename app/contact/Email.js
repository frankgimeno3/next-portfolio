"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Email() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        emailjs
          .sendForm(
            "service_hls7pk1",
            "template_q9do1tj",
            form.current,
            "tW78cuPW4vf9Xroeo"
          )
          .then((result) => {
            form.current.reset();
            console.log("tutto bene")
             
          });
      }
    };
  
    const validateForm = () => {
      const formFields = form.current.elements;
      let isValid = true;
  
      Array.from(formFields).forEach((field) => {
        if (field.tagName === "INPUT" || field.tagName === "TEXTAREA") {
          if (!field.value) {
            field.classList.add("invalid");
            isValid = false;
          } else {
            field.classList.remove("invalid");
          }
        }
      });
  
      return isValid;
    };
  
    return (
        <form ref={form} onSubmit={sendEmail} className='bg-white bg-opacity-10 p-24 m-24 p-1'>
            <label>Name</label>
            <input type="text" name="from_name" className='bg-white bg-opacity-10 m-1  p-1' />
            <label>Email</label>
            <input type="email" name="email" className='bg-white bg-opacity-10 m-1  p-1' />
            <label>Message</label>
            <textarea name="message" className='bg-white bg-opacity-10 m-1  p-1' />
            <input type="submit" value="Send" />
        </form>
    );
};