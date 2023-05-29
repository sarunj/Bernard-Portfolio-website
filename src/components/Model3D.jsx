import React from 'react'
import { Canvas } from "@react-three/fiber";
import { PresentationControls, Stage } from "@react-three/drei";

function Model3D() {
  return (
    <div>
        <h1>3D Model</h1>
        <Canvas>
            <Stage controls={PresentationControls} intensity={1} contactShadowOpacity={1} shadows adjustCamera={false}>
                <mesh receiveShadow castShadow>
                    <boxBufferGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="hotpink" />
                </mesh>
            </Stage>
        </Canvas>
        
    </div>
  )
}

export default Model3D