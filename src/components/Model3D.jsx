import React, {useRef} from 'react'
import { Canvas } from "@react-three/fiber";
import { PresentationControls, Stage } from "@react-three/drei";
import RedHeart from '../models/RedHeart';
// import {Alert, Collapse, IconButton} from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { useEffect } from 'react';


function Model3D() {
  const modelContainer = useRef();
  // const [openWebGLAlert, setOpenWebGLAlert] = React.useState(false);

//use Drei's useDetectGPU hook to check if user's device supports WebGL
  // const { isWebGL2 } = useDetectGPU();

  return (
    <div ref={modelContainer} className='h-[500px] w-[400px] md:h-[800px] md:w-[400px]'>
        {/* https://codesandbox.io/s/qyz5r?file=/src/App.js:431-507 */}
        <Canvas className='touch-none' >
          {/* TODO: make react-suspence and loader component */}
          <ambientLight intensity={0.01} />
          <spotLight intensity={0.1} />
          <PresentationControls
              // config={{ mass: 100, tension: 500 }}
              snap={{ mass: 4, tension: 100 }}
              rotation={[0, 0, 0]}
              speed={1.5}
              global={true}
              zoom={1}
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