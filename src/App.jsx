
import { Canvas } from '@react-three/fiber'
import './App.css'
import CustomLogo from './Components/CustomLogo'
import { OrbitControls } from '@react-three/drei'
import CryptoVisualization from './Components/CryptoVisualization'

function App() {

  return (
    <>
      {/* <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <CustomLogo />
        <OrbitControls />
      </Canvas> */}
      <CryptoVisualization/>
    </>
  )
}

export default App
