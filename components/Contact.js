// pages/contact.tsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
    >
      <div className="relative w-80 h-80 mb-10">
        <img
          src="images/profile2.jpg"
          className="rounded-full shadow-xl"
          alt="RetailRadar Dashboard"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-700 mb-2">Contact</h1>
        <p className="text-lg text-gray-500">jeongminlee@yonsei.ac.kr</p>
        <p className="text-lg text-gray-500"><a href="https://github.com/jeongminoyatlee" target="_blank" rel="noopener noreferrer">github.com/jeongminoyatlee</a></p>
      </div>
    </div>
    </section>
  );
};

export default Contact;
