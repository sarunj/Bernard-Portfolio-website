import React from 'react'
import { Canvas } from "@react-three/fiber";
import { PresentationControls, Stage } from "@react-three/drei";
import RedHeart from '../models/RedHeart';

function Model3D() {
  return (
    <div className='h-[600px] w-[400px] border-2 border-gray-500 bg-gray-300'>
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
              <Stage>
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
    </div>
  )
}

export default Model3D