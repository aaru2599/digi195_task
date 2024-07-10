import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const EthereumLogo = () => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  // Create the vertices for the geometry
  const vertices = new Float32Array([
    // Top half
    0, 1, 0,    // Vertex 0 (top point)
    -0.5, 0, 0.5,  // Vertex 1 (bottom front left)
    0.5, 0, 0.5,   // Vertex 2 (bottom front right)
    0.5, 0, -0.5,  // Vertex 3 (bottom back right)
    -0.5, 0, -0.5, // Vertex 4 (bottom back left)

    // Bottom half
    0, -1, 0,   // Vertex 5 (bottom point)
  ]);

  // Create the faces for the geometry
  const indices = [
    // Top half
    0, 1, 2,
    0, 2, 3,
    0, 3, 4,
    0, 4, 1,

    // Bottom half
    5, 2, 1,
    5, 3, 2,
    5, 4, 3,
    5, 1, 4,
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
      <lineSegments geometry={new THREE.EdgesGeometry(geometry)}>
        <lineBasicMaterial color="#ffffff" />
      </lineSegments>
    </group>
  );
};

export default EthereumLogo;
