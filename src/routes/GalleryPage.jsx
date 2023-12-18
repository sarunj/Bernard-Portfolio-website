import React from 'react'
import Gallery from '../components/Gallery'
import Navbar from '../components/Navbar'

const GalleryPage = () => {
  return (
    <div className="flex flex-col h-screen">
          <Navbar isTransparent={false} />
        <div className="flex-1 overflow-y-auto">
          <Gallery /> 
        </div>
    </div>
  )
}

export default GalleryPage