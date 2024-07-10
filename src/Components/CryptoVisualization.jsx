import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import EthereumLogo from './EthereumLogo ';

const CryptoVisualization = () => {
  const [contextLost, setContextLost] = useState(false);

  useEffect(() => {
    const handleContextLoss = (event) => {
      setContextLost(true);
      console.log('WebGL context lost');
    };

    const handleContextRestore = (event) => {
      setContextLost(false);
      console.log('WebGL context restored');
    };

    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvas.addEventListener('webglcontextlost', handleContextLoss);
      canvas.addEventListener('webglcontextrestored', handleContextRestore);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('webglcontextlost', handleContextLoss);
        canvas.removeEventListener('webglcontextrestored', handleContextRestore);
      }
    };
  }, []);

  if (contextLost) {
    return <div>WebGL context lost. Please refresh the page.</div>;
  }

  return (
    <Canvas style={{ height: '100vh', backgroundColor: '#000000' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <EthereumLogo />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default CryptoVisualization;
