/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useRef, useEffect} from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import redHeartScene from '../assets/redHeart_test_reduced.glb';

const RedHeart = (props) => {
  const { nodes, materials } = useGLTF(redHeartScene);
  const redHeartRef = useRef();
  // Get access to the Three.js renderer and viewport
  const { gl, viewport } = useThree();
  const rotationSpeed = 0.01;
  let isRotating = true;
  //rotate the heart
  useFrame(() => {
    if (isRotating) {
      redHeartRef.current.rotation.y += rotationSpeed;
    }
  });

  // // Handle pointer (mouse or touch) up event
  // const handlePointerUp = (event) => {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   isRotating = true;
  // };
  // const handlePointerDown = (event) => {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   isRotating = false;
  // };
  
  // useEffect(() => {
  //   //add eventlistner to the canvas
  //   const canvas = gl.domElement;
  //   canvas.addEventListener("pointerdown", handlePointerDown);
  //   canvas.addEventListener("pointerup", handlePointerUp);

  //   return () => {
  //     canvas.removeEventListener("pointerdown", handlePointerDown);
  //     canvas.removeEventListener("pointerup", handlePointerUp);
  //   }
  // });

  return (
    <group ref={redHeartRef} {...props} dispose={null}>
      <group position={[0, 0.765, 0]} rotation={[-0.046, -0.179, -1.823]}>
        <mesh
          geometry={nodes.texturedMesh_1.geometry}
          material={materials.TextureAtlas_1001}
        />
        <mesh
          geometry={nodes.texturedMesh_2.geometry}
          material={materials.TextureAtlas_1002}
        />
        <mesh
          geometry={nodes.texturedMesh_3.geometry}
          material={materials.TextureAtlas_1003}
        />
      </group>
    </group>
  );
}

export default RedHeart;