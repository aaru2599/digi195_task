import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
// import CustomLogo from './CustomLogo';
import { OrbitControls } from '@react-three/drei';
import CryptoLogo from './CryptoLogo ';

const CryptoVisualization = () => {

  return (
    <Canvas style={{ height: '100vh', backgroundColor: '#000000' }}>
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} />
      <CryptoLogo />
      {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
    </Canvas>
  );
};

export default CryptoVisualization;
