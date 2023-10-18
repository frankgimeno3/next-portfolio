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

    <form ref={form} onSubmit={sendEmail} className='mt-1 flex flex-col text-left text-white'>
      <p className='italic'>Do you want to send me a direct message?</p>
      <p className=' mr-24  py-5 text-sm'>You can contact me in my Gmail, my Linkedin or my Whatsap. Otherways, feel free to fill the form below with your name and email, and I will come back to you as soon as possible:</p>
      <div className='flex flex-col mx-5 text-xs'>
        <label>Name</label>
        <input type="text" name="from_name" className='mt-1 rounded-lg bg-white bg-opacity-10  mr-24 p-1 pl-3 '  placeholder='Please add your name here'/>
        <label className='mt-5'>Email</label>
        <input type="email" name="email" className='mt-1 rounded-lg bg-white bg-opacity-10 mr-24 p-1 pl-3 '  placeholder='Please add your email here'/>
        <label className='mt-5'>Message</label>
        <textarea name="message" className='mt-1 rounded-lg bg-white bg-opacity-10 mr-24 p-1 h-40 pl-3 ' placeholder='Ask me anything here' />
        <button type="submit" value="Send" className='my-5 py-3 w-40  bg-sky-50  text-xs rounded-lg shadow-white hover:scale-110 hover:bg-white text-gray-700 transition-transform duration-1000'> Send </button>
      </div>
    </form>
  );
};