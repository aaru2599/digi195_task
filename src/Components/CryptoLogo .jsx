import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CryptoLogo = () => {
  const groupRef = useRef();
  const clockRef = useRef(new THREE.Clock());

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.02;
      const elapsed = clockRef.current.getElapsedTime();
       groupRef.current.position.y = Math.sin(elapsed * 5) * 0.2; // Up and down movement
    }
  });

  // Create the vertices for the full diamond geometry
  const fullVertices = new Float32Array([
    // Top half
    0, 1, 0,    // Vertex 0 (top point)
    -0.5, 0, 0.5,  // Vertex 1 (bottom front left)
    0.5, 0, 0.5,   // Vertex 2 (bottom front right)
    0.5, 0, -0.5,  // Vertex 3 (bottom back right)
    -0.5, 0, -0.5, // Vertex 4 (bottom back left)

    // Bottom half
    0, -1, 0,   // Vertex 5 (bottom point)
  ]);

  //  faces for the top diamond geometry
  const fullIndices = [
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

  // Create a BufferGeometry and set its attributes for the top diamond
  const fullGeometry = new THREE.BufferGeometry();
  fullGeometry.setAttribute('position', new THREE.BufferAttribute(fullVertices, 3));
  fullGeometry.setIndex(fullIndices);
  fullGeometry.computeVertexNormals();

  //  vertices for the bottom half V shape
  const baseVertices = new Float32Array([
    0, -1, 0,   // Vertex 5 (bottom point)
    -0.5, 0, 0.5,  // Vertex 1 (top front left)
    0.5, 0, 0.5,   // Vertex 2 (top front right)
    0.5, 0, -0.5,  // Vertex 3 (top back right)
    -0.5, 0, -0.5, // Vertex 4 (top back left)
  ]);

  //  faces for the bottom half V shape
  const baseIndices = [
    0, 1, 2,  // Front face
    0, 2, 3,  // Right face
    0, 3, 4,  // Back face
    0, 4, 1,  // Left face
  ];

  // Create a BufferGeometry and set its attributes for the bottom half V shape
  const baseGeometry = new THREE.BufferGeometry();
  baseGeometry.setAttribute('position', new THREE.BufferAttribute(baseVertices, 3));
  baseGeometry.setIndex(baseIndices);
  baseGeometry.computeVertexNormals();

  return (
    <group ref={groupRef}>
      <mesh geometry={fullGeometry} receiveShadow castShadow>
        <meshStandardMaterial color="#7E97FF" flatShading receiveShadow />
      </mesh>
      <lineSegments geometry={new THREE.EdgesGeometry(fullGeometry)} receiveShadow castShadow>
        <lineBasicMaterial color="#ffffff" />
      </lineSegments>

      <mesh geometry={baseGeometry} position={[0, -1, 0]} receiveShadow castShadow>
        <meshStandardMaterial color="#7E97FF" flatShading receiveShadow />
      </mesh>
      <lineSegments geometry={new THREE.EdgesGeometry(baseGeometry)} position={[0, -1, 0]} receiveShadow castShadow>
        <lineBasicMaterial color="#ffffff" />
      </lineSegments>
    </group>
  );
};

export default CryptoLogo;
