import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CustomLogo() {
    const logoRef = useRef();

    // Rotate the logo
    useFrame(() => {
        logoRef.current.rotation.y += 0.01;
        logoRef.current.rotation.x += 0.01;
    });

    // Define a custom shape
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(1, 0);
    shape.lineTo(1, 1);
    shape.lineTo(0, 1);
    shape.lineTo(0, 0);

    const extrudeSettings = {
        steps: 2,
        depth: 0.2,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelSegments: 1,
    };

    return (
        <mesh ref={logoRef}>
            <extrudeGeometry args={[shape, extrudeSettings]} />
            <meshStandardMaterial color={'blue'} />
        </mesh>
    );
}


export default CustomLogo