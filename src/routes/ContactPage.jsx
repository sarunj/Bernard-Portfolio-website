import React from 'react'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

const ContactPage = () => {
  return (
    <div className="flex flex-col">
        <Navbar isTransparent={true} />
        <Contact />

    </div>
  )
}

export default ContactPage