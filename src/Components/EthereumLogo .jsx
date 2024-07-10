import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const EthereumLogo = () => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.x += 0.01;
    }
  });

  // Create the vertices for the geometry
  const vertices = new Float32Array([
    // Top half
    0, 1, 0,
    -0.5, 0, 0.5,
    0.5, 0, 0.5,
    0.5, 0, -0.5,
    -0.5, 0, -0.5,
    
    // Bottom half
    0, -1, 0,
  ]);

  // Create the faces for the geometry
  const indices = [
    // Top half
    0, 1, 2,
    0, 2, 3,
    0, 3, 4,
    0, 4, 1,
    
    // Bottom half
    5, 1, 2,
    5, 2, 3,
    5, 3, 4,
    5, 4, 1,
  ];

  // Create a BufferGeometry and set its attributes
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  return (
    <group ref={groupRef}>
      <mesh geometry={geometry}>
        <meshStandardMaterial color="#7E97FF" flatShading />
      </mesh>
    </group>
  );
};

export default EthereumLogo;
