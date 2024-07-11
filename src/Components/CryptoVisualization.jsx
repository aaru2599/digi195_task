import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import EthereumLogo from './EthereumLogo ';
import CustomLogo from './CustomLogo';

const CryptoVisualization = () => {
 

  return (
    <Canvas style={{ height: '100vh', backgroundColor: '#000000' }}>
      <ambientLight intensity={2} />
      {/* <pointLight position={[10, 10, 10]} /> */}
      <EthereumLogo />
      {/* <CustomLogo/> */}

      {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
    </Canvas>
  );
};

export default CryptoVisualization;
