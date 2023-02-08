import React from 'react'
import Gallery from '../components/Gallery'
import Navbar from '../components/Navbar'

const GalleryPage = () => {
  return (
    <div className="flex flex-col">
        <Navbar />
        <Gallery />
    </div>
  )
}

export default GalleryPage