import React, {useRef} from 'react'
import { Canvas } from "@react-three/fiber";
import { PresentationControls, Stage } from "@react-three/drei";
import RedHeart from '../models/RedHeart';
import {Alert, Collapse, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';


function Model3D() {
  const modelContainer = useRef();
  const [openWebGLAlert, setOpenWebGLAlert] = React.useState(false);

  //Check if WebGL is available
  //   useEffect (() => {
  //     const isWebGLSupported = () => {
  //       try {
  //         const canvas = document.createElement('canvas');
  //         return !!(
  //           window.WebGLRenderingContext &&
  //           (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
  //         );
  //       } catch (e) {
  //         return false;
  //       }
  //     };
    
  //   // Usage
  //   if (isWebGLSupported()) {
  //     console.log('Hardware acceleration is enabled.');
  //     setOpenWebGLAlert(false);
  //   } else {
  //     console.warn('Hardware acceleration is not enabled.');
  //     setOpenWebGLAlert(true);
  //   }
  // }, []);



  return (
    <div ref={modelContainer} className='h-[600px] w-[400px] border-2 border-gray-500 bg-gray-300'>
        <h1>3D Model</h1>
        {/* https://codesandbox.io/s/qyz5r?file=/src/App.js:431-507 */}
        <Canvas>
          {/* TODO: make react-suspence and loader component */}
          <PresentationControls
              // config={{ mass: 100, tension: 500 }}
              snap={{ mass: 4, tension: 100 }}
              rotation={[0, 0, 0]}
              speed={1.5}
              global={true}
              zoom={1.5}
              polar={[-0.3, Math.PI / 4]}
            >
              <Stage environment={null}>
                  <RedHeart />
              </Stage>
            </PresentationControls>
        </Canvas>    

        {/* <PresentationControls
              speed={1.5}
              global
              zoom={1.5}
              polar={[-0.3, Math.PI / 4]}
            >
              <Stage environment={null}>
                <Model scale={0.01} />
              </Stage>
            </PresentationControls> */}

        
        {/* <Collapse in={openWebGLAlert}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenWebGLAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Turn on Hardware Acceleration to view the 3D model smoothly.
          </Alert>
        </Collapse>  */}
    </div>
  )
}

export default Model3D