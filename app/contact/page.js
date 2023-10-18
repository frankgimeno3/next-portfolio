 
"use client"
import ContactMe from "../components/ContactMe"
 
export default function Contact() {
  return (
    <div className='mt-8 relative'>
      <div className='relative z-10'>
        <ContactMe/>
       </div>
      <video
        autoPlay
        loop
        muted
        className='object-cover w-full h-screen fixed z-0  '
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 0,
          opacity: 0.3,
        }}
      >
        <source src="/videos/blue.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}